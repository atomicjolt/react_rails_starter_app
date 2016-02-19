namespace :canvas do

  desc "Sync students with Canvas"
  task :sync_students => [:environment] do |t, args|
    Course.all.each do  |course|
      course.sync_students
    end
  end

  desc "Scrape the canvas api"
  task :api => [:environment] do

    common_params = []
    
    url = "https://canvas.instructure.com/doc/api/all_resources.html"
    response = HTTParty.get(url)
    parsed = Nokogiri::HTML(response.body)
    rb = {}
    js_urls = {}
    js = ''
    allow_params = parsed.css('.argument .name').map{|a| a.inner_html.strip}
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
          .gsub("_index", "S")
          .gsub("s_s", "s")
          .chomp("_")
          .upcase

        parts = endpoint.inner_html.strip.split(' ')
        api_url = parts[1]

        ruby_args = []

        ruby_api_url = api_url.split('/').map do |part|
          if part[0] == ":"
            arg = part.gsub(":", "")
            ruby_args << "#{arg}:"
			      common_params << arg
            "\#{#{arg}}"
          else
            part
          end
        end.join('/').gsub("/api/v1/", "")

        js_args = []
        js_url_parts = api_url.split(/(:[a-z_]+)/).map do |part|
          if part[0] == ":"
            part.sub!(':', '')
            js_args << part
            part
          else
            %Q{"#{part}"}
          end
        end

        name_parts = api_url.split('/') - main_parts
        if name_parts.length > 0
          name_parts = name_parts.map{ |n| n.gsub("_id", "").gsub(":", "").upcase }
          const_name = "#{const_name}_BY_#{name_parts.join('_AND_')}"
        end

        anchor = method.css('.api_method_name')[0].attributes['name'].value
        
        js << "  // [#{canvas_name})](https://canvas.instructure.com/doc/api/all_resources.html##{anchor})\n"
        js << "  // Api Url: #{parts[1]}\n"
        js << "  // return canvasRequest(CanvasConstants.#{const_name}, {#{ruby_args.join(', ')}}, query);\n"
        js << "  #{const_name}: Network.#{parts[0]},\n\n"

        puts "Not adding duplicate: #{const_name}" if rb.has_key?(const_name)
        rb[const_name] = %Q{     "#{const_name}" => { uri: ->(#{ruby_args.join(', ')}) { "#{ruby_api_url}" }, method: "#{parts[0]}" },\n}
        js_urls[const_name] = %Q{  "#{const_name}": { uri: function(#{js_args.join(', ')}){return #{js_url_parts.join(' + ')}}, method: "#{parts[0]}" },\n}

      end

    end

    js_out = %Q{
import Network             from "../../constants/network";
import wrapper             from "../../constants/wrapper";
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
    # TODO fix canvas_urls.js and output it to the correct dir
    File.write("#{Rails.root}/lib/canvas_urls.js", js_urls_out)
    File.write("#{Rails.root}/../atomic-client/client/js/libs/canvas/constants.js", js_out)

    # puts "*******************************************************************************"
    # puts "Canvas params that should be part of the url:"
    # puts common_params.uniq.map{|p| ":#{p}"}.join(',')

    # puts "Canvas params that can be part of the url:"
    # puts allow_params.uniq.map{|p| ":#{p}"}.join(',')

    # puts common_params.uniq - allow_params.uniq
  end

end
