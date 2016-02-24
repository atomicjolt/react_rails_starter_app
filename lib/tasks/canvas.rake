namespace :canvas do

  desc "Sync students with Canvas"
  task :sync_students => [:environment] do |t, args|
    Course.all.each do  |course|
      course.sync_students
    end
  end

  desc "Scrape the canvas api"
  task :api => [:environment] do
    tracking = []
    rb_urls = ''
    js_urls = ''
    js = ''
    endpoint = "https://canvas.instructure.com/doc/api"
    api_directory_url = "#{endpoint}/api-docs.json"
    all_apis = HTTParty.get(api_directory_url)
    all_apis["apis"].each do |api_doc|
      
      puts "Setting up API for #{api_doc["description"]}"
      rb_urls << "\n     # #{api_doc["description"]}\n"

      resource = HTTParty.get("#{endpoint}#{api_doc["path"]}")
      
      resource["apis"].each_with_index do |api, index|

        api_url = api['path'].gsub("/v1/", "")
        
        api["operations"].each do |operation|
          nickname = operation["nickname"]
          method   = operation["method"]
          
          if tracking.include?(nickname)
            puts "** Not adding duplicate: #{nickname} **"
          else
            args = args(api_url)
            tracking << nickname
            rb_urls << build_ruby_urls(nickname, api_url, args, method)
            js_urls << build_js_urls(nickname, api_url, args, method)
            js << build_js_constants(nickname, api_url, args, method, resource["resourcePath"].gsub("/", ""), operation['notes'].gsub("\n", "\n// "), operation)
          end

        end
      end

      write_js_constants(api_doc["path"].gsub("/", "").gsub(".json", ""), api_doc["description"], js)
      
    end
    write_rb_canvas_urls(rb_urls)
    write_js_canvas_urls(js_urls)
  end

  def args(api_url)
    api_url.split('/').map do |part|
      if part[0] == "{"
        part.gsub(/[\{\}]/, "")
      end
    end.compact
  end

  def build_js_constants(nickname, api_url, args, method, resource, description, operation)
    parameters = ''
    if operation["parameters"].present?
      parameters = operation["parameters"]
        .reject{|p| p["paramType"] == "path"}
        .map{|p| p['name']}
        .compact
      if parameters.length > 0
        parameters = "\n// Query Params:\n//   #{parameters.join("\n//   ")}"
      end
    end

    %Q{
// #{operation["summary"]}
// #{description.gsub("\n\n", "\n")}
// API Docs: https://canvas.instructure.com/doc/api/#{resource}.html
// API Url: #{api_url}#{parameters}
// return canvasRequest(CanvasConstants.#{nickname}, {#{args.join(', ')}}, query);
export const #{nickname} = { type: "#{nickname.upcase}", method: "#{method.downcase}", reducer: '#{resource}'};
    }
  end

  def build_js_urls(nickname, api_url, args, method)
    js_url_parts = api_url.split(/(\{[a-z_]+\})/).map do |part|
      part[0] == "{" ? part.gsub(/[\{\}]/, "") : %Q{"#{part}"}
    end
    %Q{  "#{nickname.upcase}": { uri: function(#{args.join(', ')}){return #{js_url_parts.join(' + ')}}, method: "#{method}" },\n}
  end

  def build_ruby_urls(nickname, api_url, args, method)
    ruby_api_url = api_url.gsub("{", "#\{")
    %Q{     "#{nickname.upcase}" => { uri: ->(#{args.map{|a| "#{a}:"}.join(', ')}) { "#{ruby_api_url}" }, method: "#{method}" },\n}          
  end

  ###############################################################################
  #
  # Write a file containing urls for calling the Canvas API from javascript
  #
  def write_js_canvas_urls(js_urls)
      out = %Q{
export default {
#{js_urls}
};
}
    File.write("#{Rails.root}/../atomic-lti/atomic/lib/canvas_urls.js", out)
  end

  ###############################################################################
  #
  # Write a file containing urls for calling the Canvas API from ruby
  #
  def write_rb_canvas_urls(rb_urls)
    out = %Q{
class CanvasUrls

  def self.urls
    {
#{rb_urls}
    }
  end
end
}
    File.write("#{Rails.root}/lib/canvas_urls.rb", out)
  end

  ###############################################################################
  #
  # Write a file containing constants for calling the Canvas API from the client
  #
  def write_js_constants(name, description, js)
    out = %Q{// #{description}
#{js}
}
    File.write("#{Rails.root}/../atomic-client/client/js/libs/canvas/constants/#{name}.js", out)

  end

end
