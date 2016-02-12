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
    rb = ''
    js = ''
    methods = parsed.css('.method_details')
    methods.each do |method|
      
      name = method.css('.api_method_name a')[0].inner_html.strip
      
      endpoints = method.css('.endpoint')
      main_parts = endpoints[0].inner_html.strip.split(' ')[1].split('/')

      endpoints.each do |endpoint|
        const_name = name.gsub(/[^a-zA-Z]/, "_").upcase
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

        js << "\t// [#{name})](https://canvas.instructure.com/doc/api/all_resources.html##{method.css('.api_method_name')[0].attributes['name'].value})\n"
        js << "\t// Api Url: #{parts[1]}\n"
        js << "\t// return canvasRequest(CanvasConstants.#{const_name}, {#{args.join(', ')}}, query);\n"
        js << "\t#{const_name}: Network.#{parts[0]},\n\n"
        rb << %Q{"#{const_name}" => ->(#{args.join(', ')}) { "#{ruby_api_url}" },\n}
      end
      
    end
    File.write("#{Rails.root}/lib/tasks/canvas.rb", rb)
    File.write("#{Rails.root}/lib/tasks/canvas.js", "export default {\n#{js}\n};")
  end

end