module Integrations

  class CanvasCoursesLti < CanvasBaseLti

    def self.courses(canvas_authentication, lti_launch_url)
      api = Canvas.new(canvas_authentication.provider_url, canvas_authentication.token)

      allowed_enrollments = %w(teacher ta designer)
      allowed_courses = []
      already_courses = []
      courses = api.courses

      courses.each do |course|
        if(course['enrollments'].map{|e| e['type']} & allowed_enrollments).length > 0
          if(id = self.find_tool_id(api.get_course_lti_tools(course['id']), lti_launch_url))
            already_courses << course
          else
            allowed_courses << course
          end
        end
      end
      [allowed_courses, already_courses]
    end

    # canvas_authentications can either be a single value or an array
    def self.setup(course, consumer_key, shared_secret, provider_url, token, lti_options = {})

      raise "Please provide an LTI launch url" if lti_options[:launch_url].blank?

      config_xml = Lti::Canvas.config_xml(lti_options)

      api = Canvas.new(provider_url, token)
      existing_tools = api.proxy("LIST_EXTERNAL_TOOLS_COURSES", {course_id: course['id']})

      # Reset config for each iteration since we might not want the key and secret
      tool_config = {
        "config_type" => "by_xml",
        "config_xml" => config_xml
      }
      if(id = self.find_tool_id(existing_tools, lti_options[:launch_url]))
        tool = self.find_tool(existing_tools, lti_options[:launch_url])
        # Make sure the the LTI key associated with the tool exists in our system.
        lti_connected_resource = Account.find_by(lti_key: tool['consumer_key']) || User.find_by(lti_key: tool['consumer_key'])
        if lti_connected_resource.blank?
          # The user or account that connected to the tool is no longer in the system or has changed their LTI key. We need to update the key and secret.
          tool_config["consumer_key"] = consumer_key
          tool_config["shared_secret"] = shared_secret
        end
        # Important! If lti_connected_resource is valid then don't update the 'oauth_consumer_key' or else external identifiers will break.
        api.proxy("EDIT_EXTERNAL_TOOL_COURSES", { course_id: course['id'], external_tool_id: id }, tool_config)
      else
        tool_config["consumer_key"] = consumer_key
        tool_config["shared_secret"] = shared_secret
        api.proxy("CREATE_EXTERNAL_TOOL_COURSES", { course_id: course['id'] }, tool_config)
      end

    end

  end

end