namespace :canvas do

  desc "Sync students with Canvas"
  task :sync_students => [:environment] do |t, args|
    Course.all.each do  |course|
      course.sync_students
    end
  end

  desc "Scrape the canvas api"
  task :api => [:environment] do

    url = "https://canvas.instructure.com/doc/api/all_resources.html"
    response = HTTParty.get(url)
    parsed = Nokogiri::HTML(response.body)
    rb = {}
    js_urls = {}
    js = ''
    methods = parsed.css('.method_details')
    methods.each do |method|
      
      canvas_name = method.css('.api_method_name a')[0].inner_html.strip

      endpoints = method.css('.endpoint')
      main_parts = endpoints[0].inner_html.strip.split(' ')[1].split('/')

      endpoints.each do |endpoint|
        
        if method.css('.defined-in a')[0].blank?
          const_name = canvas_name
        else
          const_name = method.css('.defined-in a')[0].inner_html
        end

        const_name = const_name
          .strip
          .underscore
          .downcase
          .gsub("s_controller", "")
          .gsub("controller", "")
          .gsub("api", "")
          .gsub("#index", "s")
          .gsub("#show", "_GET")
          .gsub("#create", "_CREATE")
          .gsub("#update", "_UPDATE")
          .gsub("#destroy", "_DELETE")
          .gsub(/[^a-zA-Z]/, "_")
          .gsub("__", "_")
          .gsub("__", "_")
          .chomp("_")
          .upcase

        parts = endpoint.inner_html.strip.split(' ')
        api_url = parts[1]

        args = []
        
        ruby_api_url = api_url.split('/').map do |part|
          if part[0] == ":"
            arg = part.gsub(":", "")
            args << "#{arg}:"
            "\#{#{arg}}"
          else
            part
          end
        end.join('/').gsub("/api/v1/", "")

        name_parts = api_url.split('/') - main_parts
        if name_parts.length > 0
          name_parts = name_parts.map{ |n| n.gsub("_id", "").gsub(":", "").upcase }
          const_name = "#{const_name}_BY_#{name_parts.join('_AND_')}"
        end

        js << "  // [#{canvas_name})](https://canvas.instructure.com/doc/api/all_resources.html##{method.css('.api_method_name')[0].attributes['name'].value})\n"
        js << "  // Api Url: #{parts[1]}\n"
        js << "  // return canvasRequest(CanvasConstants.#{const_name}, {#{args.join(', ')}}, query);\n"
        js << "  #{const_name}: Network.#{parts[0]},\n\n"
        
        puts "Not adding duplicate: #{const_name}" if rb.has_key?(const_name)
        rb[const_name] = %Q{     "#{const_name}" => ->(#{args.join(', ')}) { "#{ruby_api_url}" },\n}
        js_urls[const_name] = %Q{"#{const_name}" => ->(#{args.join(', ')}) { "#{ruby_api_url}" },\n}
      
      end
      
    end

    js_out = %Q{
import wrapper             from "./wrapper";
import _                   from "lodash";

const CanvasMethods = {
#{js}
};

const requests = _.map(CanvasMethods, (v, k) => {
  return k;
});

const CanvasConstants = wrapper([], requests);

export { CanvasMethods };
export { CanvasConstants };
}

    rb_out = %Q{
class CanvasUrls

  def self.urls
    {
#{rb.map{|k,v| v}.join()}
    }
  end
end
}

    js_urls_out = %Q{
export default {
  #{js_urls.map{|k,v| v}.join()}
};
}


    File.write("#{Rails.root}/lib/canvas_urls.rb", rb_out)
    File.write("#{Rails.root}/lib/canvas_urls.js", js_urls_out)
    File.write("#{Rails.root}/client/js/constants/canvas.js", js_out)
    File.write("#{Rails.root}/../atomic-client/client/js/constants/canvas.js", js_out)
  end

end