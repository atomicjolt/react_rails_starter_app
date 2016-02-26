namespace :canvas do
  
  module GraphQLHelpers
    
    def graphQLType(property)
      type = property['type']
      case type 
      when "integer", "string", "boolean", "datetime"
        graphQLPrimitive(type)
      when "array"
        graphQLArrayType(property)
      else
        "unknown - #{type}"
      end
    end

    def graphQLPrimitive(type)
      case type
      when "integer"
        "GraphQLInt"
      when "string"
        "GraphQLString"
      when "boolean"
        "GraphQLBoolean"
      when "datetime"
        "GraphQLDateTime"
      else
        "unknown - #{type}"
      end
    end

    def graphQLArrayType(property)
      begin
        type = graphQLPrimitive(property["items"]["type"])
      rescue => ex
        type = "GraphQLString"
      end
      "new GraphQLList(#{type}), resolve: function(){ return 1; }"
    end

    def fields(model)
      if model['properties']
        fields = model['properties'].map do |name, property|
          "#{name}: {type: #{graphQLType(property)}, description: '#{property["description"]} Example: #{property["example"]}' }"
        end.join(",\n    ")
        "fields: () => ({ \n    #{fields}\n  })\n"
      end
    end

  end

  module JsHelpers
    def js_url_parts(api_url)
      api_url.split(/(\{[a-z_]+\})/).map do |part|
        part[0] == "{" ? part.gsub(/[\{\}]/, "") : %Q{"#{part}"}
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
        @method    = operation["method"]
        @operation = operation
        @nickname  = operation["nickname"]
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
        puts "Generating api for #{api['description']}"
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
          models << Render.new("./canvas_api/graphql_model.erb", api, resource, nil, nil, nil, model).render
        end
        # Generate one file of constants for every Canvas Api
        constants_renderer = Render.new("./canvas_api/constants.erb", api, resource, nil, nil, constants, nil)
        constants_renderer.save("#{Rails.root}/../atomic-client/client/js/libs/canvas/constants/#{constants_renderer.name}.js")
      end
      Render.new("./canvas_api/rb_urls.erb", nil, nil, nil, nil, canvas_urls_rb, nil).save("#{Rails.root}/lib/canvas_urls.rb")
      Render.new("./canvas_api/js_urls.erb", nil, nil, nil, nil, canvas_urls_js, nil).save("#{Rails.root}/../atomic-lti/atomic/lib/canvas/urls.js")
      
      schema = {
        models: models,
        queries: queries,
        mutations: mutations
      }
      Render.new("./canvas_api/schema.erb", nil, nil, nil, nil, schema, nil).save("#{Rails.root}/../atomic-lti/atomic/lib/canvas/schema.js")
    end

  end

  desc "Scrape the canvas api"
  task :api => [:environment] do
    CanvasApiBuilder.build
  end

end