desc "Get basic LTI configuration for an account. Call using: rake lti['code'] where code is the account code for which to generate the LTI xml"
task :lti, [:code] => :environment do |t, args|
  puts "----------------------------------------------------------------------------------------------------------------"
  puts "Basic LTI Config"
  puts "----------------------------------------------------------------------------------------------------------------"
  config = Lti::Canvas.basic_config(args[:code])
  puts Lti::Canvas.config_xml(config)
  puts "----------------------------------------------------------------------------------------------------------------"
  puts "Course Navigation LTI Config"
  puts "----------------------------------------------------------------------------------------------------------------"
  config = Lti::Canvas.course_navigation_config(args[:code], "public")
  puts Lti::Canvas.config_xml(config)
  puts "----------------------------------------------------------------------------------------------------------------"
  puts "Account Navigation LTI Config"
  puts "----------------------------------------------------------------------------------------------------------------"
  config = Lti::Canvas.account_navigation_config(args[:code])
  puts Lti::Canvas.config_xml(config)
  puts "----------------------------------------------------------------------------------------------------------------"
  puts "Account Information"
  puts "----------------------------------------------------------------------------------------------------------------"
  account = Account.find_by(code: args[:code])
  puts "Key : #{account.lti_key}"
  puts "Secret : #{account.lti_secret}"
end

desc "Generate LTI test params. Call using: rake lti_test_params['lti_launch_url'] where lti_launch_url is the lti launch url"
task :lti_test_params, [:lti_launch_url] => :environment do |t, args|
  require File.join(File.dirname(__FILE__), "../../spec/support/lti.rb")
  url = args[:code] || "https://www.example.com/lti/launch"

  puts "LTI key: #{oauth_consumer_key}"
  puts "LTI secret: #{oauth_consumer_secret}"
  puts "--------------------------------------"
  puts lti_params({"launch_url" => url}).to_json
end

def iterate_tools(api, id_type, list_constant, constant)
  api.proxy(list_constant, {}, nil, true) do |results|
    results.each do |parent|
      external_tools = api.proxy("LIST_EXTERNAL_TOOLS_#{constant}", {id_type => parent['id']}, nil, true)
      external_tools.each do |external_tool|
        yield external_tool, parent
      end
    end
  end
end

def remove_tool(api, external_tool, parent, remove_tools)
  if remove_tools.include?(external_tool["name"])
    puts "Removing LTI tool: #{external_tool["name"]} from #{parent["name"]}"
    begin
      result = api.proxy("DELETE_EXTERNAL_TOOL_#{constant}", {id_type => parent['id'], external_tool_id: external_tool['id']})
    rescue Canvas::NotFoundException
      # It's possible we're trying to delete a tool we've already deleted. Move on
    end
  end
end

desc "Remove all installs of the LTI tool"
task :lti_destroy_all => :environment do |t|
  remove_tools = ["Atomic Tools"] # Add the names of LTI tools that you wish to remove to this array.
  Account.find_each do |account|
    puts "Removing LTI tools from account: #{account.name} Canvas url: #{account.canvas_uri}"
    api = account.canvas_api

    puts "Removing LTI tools from courses"
    iterate_tools(api, :course_id, "LIST_YOUR_COURSES", "COURSES") do |external_tool, parent|
      remove_tool(api, external_tool, parent, remove_tools)
    end

    puts "Removing LTI tools from accounts"
    iterate_tools(api, :account_id, "LIST_ACCOUNTS", "ACCOUNTS") do |external_tool, parent|
      remove_tool(api, external_tool, parent, remove_tools)
    end
  end
end

desc "List all installed LTI tools"
task :lti_list_all => :environment do |t|
  Account.find_each do |account|

    puts "LTI tools from account: #{account.name} Canvas url: #{account.canvas_uri}"
    api = account.canvas_api

    puts "Course LTI Tools"
    iterate_tools(api, :course_id, "LIST_YOUR_COURSES", "COURSES") do |external_tool, parent|
      puts "#{parent["name"]}: #{external_tool["name"]}"
    end

    puts "Account LTI tools"
    iterate_tools(api, :account_id, "LIST_ACCOUNTS", "ACCOUNTS") do |external_tool, parent|
      puts "#{parent["name"]}: #{external_tool["name"]}"
    end
  end
end
