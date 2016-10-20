module Lti

  class Utils

    def self.lti_configs
      LtiApplication.find_each do |app|
        config = {
          title: app.name,
          launch_url: "https://#{Rails.application.secrets.application_url}/lti_launches",
          domain: "#{Rails.application.secrets.application_url}",
          icon: "https://#{Rails.application.secrets.application_url}/images/oauth_icon.png",
          description: app.description
        }
        puts "****************************************************************************************************************"
        puts "LTI configuration for #{app.name}"
        puts ""
        puts "----------------------------------------------------------------------------------------------------------------"
        puts "Basic LTI Config"
        puts "----------------------------------------------------------------------------------------------------------------"
        puts Lti::Config.xml(config)
        puts ""
        puts "----------------------------------------------------------------------------------------------------------------"
        puts "Course Navigation LTI Config"
        puts "----------------------------------------------------------------------------------------------------------------"
        course_navigation_config = Lti::Config.course_navigation(config, "public")
        puts Lti::Config.xml(course_navigation_config)
        puts ""
        puts "----------------------------------------------------------------------------------------------------------------"
        puts "Account Navigation LTI Config"
        puts "----------------------------------------------------------------------------------------------------------------"
        account_navigation_config = Lti::Config.account_navigation(config)
        puts Lti::Config.xml(account_navigation_config)
        puts ""
        puts "----------------------------------------------------------------------------------------------------------------"
        puts "Account Information"
        puts "----------------------------------------------------------------------------------------------------------------"
        puts "Key : #{app.lti_key}"
        puts "Secret : #{app.lti_secret}"
      end
    end
  end

  def self.list_all
    LtiApplication.find_each do |app|
      api = Canvas.new(app.canvas_uri, Rails.Application.secrets.canvas_token || app.canvas_token)

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

  def self.destroy_all
    LtiApplication.find_each do |app|
      puts "Removing LTI tool: #{app.name} Canvas url: #{app.canvas_uri}"
      api = Canvas.new(app.canvas_uri, Rails.Application.secrets.canvas_token || app.canvas_token)

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

  def self.iterate_tools(api, id_type, list_constant, constant)
    api.proxy(list_constant, {}, nil, true) do |results|
      results.each do |parent|
        external_tools = api.proxy("LIST_EXTERNAL_TOOLS_#{constant}", {id_type => parent['id']}, nil, true)
        external_tools.each do |external_tool|
          yield external_tool, parent
        end
      end
    end
  end

  def self.remove_tool(api, external_tool, parent, remove_tools)
    if remove_tools.include?(external_tool["name"])
      puts "Removing LTI tool: #{external_tool["name"]} from #{parent["name"]}"
      begin
        result = api.proxy("DELETE_EXTERNAL_TOOL_#{constant}", {id_type => parent['id'], external_tool_id: external_tool['id']})
      rescue Canvas::NotFoundException
        # It's possible we're trying to delete a tool we've already deleted. Move on
      end
    end
  end

end