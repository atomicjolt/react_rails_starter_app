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

def remove_tool(api, id_type, list_constant, constant, remove_tools)
  api.proxy(list_constant, {}, nil, true) do |results|
    results.each do |result|
      external_tools = api.proxy("LIST_EXTERNAL_TOOLS_#{constant}", {id_type => result['id']}, nil, true)
      external_tools.each do |external_tool|
        puts "Removing LTI tool: #{external_tool["name"]}"
        if remove_tools.include?(external_tool["name"])
          #result = api.proxy("DELETE_EXTERNAL_TOOL_#{constant}", {id_type => result['id'], external_tool_id: external_tool['id']})
        end
      end
    end
  end
end

desc "Remove all installs of the LTI tool"
task :lti_destroy_all => :environment do |t|
  remove_tools = [] # Add the names of LTI tools that you wish to remove to this array.
  puts "Removing lti tools"
  Account.find_each do |account|
    api = account.canvas_api
    remove_tool(api, :course_id, "LIST_YOUR_COURSES", "COURSES", remove_tools)
    remove_tool(api, :account_id, "LIST_ACCOUNTS", "ACCOUNTS", remove_tools)
  end
end