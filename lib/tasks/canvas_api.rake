namespace :canvas do
  
  module GraphQLHelpers
    
    def graphQLType(name, property, resource_name)
      if property["$ref"]
        "#{property["$ref"]}, resolve: function(model){ return model.#{name}; }"
      else
        type = property['type']
        case type 
        when "integer", "string", "boolean", "datetime", "number"
          graphQLPrimitive(type, property['format'])
        when "array"
          begin
            if property["items"]["$ref"]
              type = property["items"]["$ref"]
            else
              type = graphQLPrimitive(property["items"]["type"], property["items"]["format"])
            end
          rescue => ex
            type = "GraphQLString"
          end
          "new GraphQLList(#{type})"
        when "object"
          # TODO handle objects
          nil
        else
          "unknown - #{property}"
        end
      end
    end

    def graphQLResolve(name, property, resource_name)
      if property["$ref"]
        "function(model){ return model.#{name}; }"
      elsif property['type'] == "array" && property["items"] && property["items"]["$ref"]
        "function(model){ return model.#{name}; }"
      end
    end

    def graphQLPrimitive(type, format)
      case type
      when "integer"
        "GraphQLInt"
      when "number"
        if format == "float64"
          "GraphQLFloat"
        else
          # TODO many of the Canvas types with 'number' don't indicate a type so we have to guess
          # Hopefully that changes. For now we go with float
          "GraphQLFloat"
        end
      when "string"
        "GraphQLString"
      when "boolean"
        "GraphQLBoolean"
      when "datetime"
        "GraphQLDateTime"
      end
    end

    def fields(model, resource_name)
      model['properties'].map do |name, property|

        # HACK. This property doesn't have any metadata. Throw in a couple lines of code specific to this field.
        if name == "created_source" && property == "manual|sis|api"
          "#{name}: new GraphQLEnumType({ name: '#{name}', values: { manual: { value: 'manual' }, sis: { value: 'sis' }, api: { value: 'api' } } })"
        else

          description = ""
          if property["description"].present? && property["example"].present?
            description << "#{safeJs(property["description"])}. Example: #{safeJs(property["example"])}".gsub("..", "").gsub("\n", " ")
          end
          
          if type = graphQLType(name, property, resource_name)
            resolve = graphQLResolve(name, property, resource_name)
            resolve = "resolve: #{resolve}, " if resolve.present?
            "#{name}: { type: #{type}, #{resolve}description: \"#{description}\" }"
          end

        end

      end.compact
    end

    def safeJs(str)
      str = str.join(', ') if str.is_a?(Array)
      str = str.map{|k, v| v}.join(', ') if str.is_a?(Hash)
      return str unless str.is_a?(String)
      str.gsub('"', "'")
    end
  end

  module JsHelpers
    def js_url_parts(api_url)
      api_url.split(/(\{[a-z_]+\})/).map do |part|
        if part[0] == "{"
          arg = part.gsub(/[\{\}]/, "")
          "args['#{arg}']"
        else
          %Q{"#{part}"}
        end
      end
    end

    def js_args(args)
      if args.present?
        "[\"#{args.join('","')}\"]"
      else
        "[]"
      end
    end

    def parameters_doc(operation)
      if operation["parameters"].present?
        parameters = operation["parameters"]
          .reject{|p| p["paramType"] == "path"}
          .map{|p| "#{p['name']}#{p['required'] ? ' (required)' : ''}" }
          .compact
        if parameters.length > 0
          "\n// const query = {\n//   #{parameters.join("\n//   ")}\n// }"
        else
          ''
        end
      else
        ''
      end
    end

  end

  module RubyHelpers

    def ruby_api_url(api_url)
      api_url.gsub("{", "#\{")
    end

  end

  class Render
    include GraphQLHelpers
    include JsHelpers
    include RubyHelpers
    attr_accessor :template, :description, :resource, :api_url, :operation, 
                  :args, :method, :api, :name, :resource_name, :resource_api,
                  :nickname, :notes, :content, :summary, :model, :model_name

    def initialize(template, api, resource, resource_api, operation, content, model)
      @template = File.read(File.expand_path(template, __dir__))
      if api
        @api         = api
        @name        = @api["path"].gsub("/", "").gsub(".json", "")
        @description = @api["description"]
      end
      if resource
        @resource      = resource
        @resource_name = resource["resourcePath"].gsub("/", "")
      end
      if resource_api
        @resource_api = resource_api
        @api_url      = resource_api['path'].gsub("/v1/", "")
        @args         = args(@api_url)
      end
      if operation
        nickname = operation["nickname"]
        nickname = "#{@name}_#{nickname}" if ["upload_file", "query_by_course", "preview_processed_html", "create_peer_review_courses", "create_peer_review_sections", "set_extensions_for_student_quiz_submissions"].include?(nickname)

        @method    = operation["method"]
        @operation = operation
        @nickname  = nickname
        @notes     = operation['notes'].gsub("\n", "\n// ")
        @summary   = operation["summary"]
      end
      @content = content
      @model = model
    end

    def args(api_url)
      api_url.split('/').map do |part|
        if part[0] == "{"
          part.gsub(/[\{\}]/, "")
        end
      end.compact
    end

    def render()
      ERB.new(@template, nil, '-').result(binding).strip
    end

    def save(file)
      File.write(file, render)
    end

  end

  class CanvasApiBuilder
    
    def self.build
      endpoint = "https://canvas.instructure.com/doc/api"
      directory = HTTParty.get("#{endpoint}/api-docs.json")
      canvas_urls_rb = []
      canvas_urls_js = []
      models = []
      queries = []
      mutations = []
      directory["apis"].each do |api|
        puts "Generating #{api['description']}"
        resource = HTTParty.get("#{endpoint}#{api["path"]}")
        constants = []
        resource['apis'].each do |resource_api|
          resource_api["operations"].each do |operation|
            constants << Render.new("./canvas_api/constant.erb", api, resource, resource_api, operation, nil, nil).render
            canvas_urls_rb << Render.new("./canvas_api/rb_url.erb", api, resource, resource_api, operation, nil, nil).render
            canvas_urls_js << Render.new("./canvas_api/js_url.erb", api, resource, resource_api, operation, nil, nil).render
            if "GET" == operation["method"].upcase
              queries << Render.new("./canvas_api/graphql_query.erb", api, resource, resource_api, operation, nil, nil).render
            else
              mutations << Render.new("./canvas_api/graphql_mutation.erb", api, resource, resource_api, operation, nil, nil).render
            end
          end
        end
        resource['models'].map do |name, model|
          if model['properties'] # Don't generate models without properties
            models << Render.new("./canvas_api/graphql_model.erb", api, resource, nil, nil, nil, model).render
          end
        end
        # Generate one file of constants for every Canvas Api
        constants_renderer = Render.new("./canvas_api/constants.erb", api, resource, nil, nil, constants, nil)
        constants_renderer.save("#{Rails.root}/../atomic-client/client/js/libs/canvas/constants/#{constants_renderer.name}.js")
      end
      Render.new("./canvas_api/rb_urls.erb", nil, nil, nil, nil, canvas_urls_rb, nil).save("#{Rails.root}/lib/canvas_urls.rb")
      Render.new("./canvas_api/js_urls.erb", nil, nil, nil, nil, canvas_urls_js, nil).save("#{Rails.root}/../atomic-lti/canvas/lib/urls.js")
      
      Render.new("./canvas_api/graphql_types.erb", nil, nil, nil, nil, models.compact, nil).save("#{Rails.root}/../atomic-lti/canvas/lib/graphql_types.js")
      Render.new("./canvas_api/graphql_queries.erb", nil, nil, nil, nil, queries, nil).save("#{Rails.root}/../atomic-lti/canvas/lib/graphql_queries.js")
      Render.new("./canvas_api/graphql_mutations.erb", nil, nil, nil, nil, mutations, nil).save("#{Rails.root}/../atomic-lti/canvas/lib/graphql_mutations.js")
    end

  end

  desc "Scrape the canvas api"
  task :api => [:environment] do
    CanvasApiBuilder.build
  end

end