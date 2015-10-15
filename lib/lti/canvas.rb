# https://canvas.instructure.com/doc/api/tools_xml.html
# LTI gem docs: https://github.com/instructure/ims-lti
module Lti

  class Canvas

    def self.tool_mode(env)
      "(#{env})" if env.present? && env != 'production'
    end

    def self.tool_name(env)
      "#{Rails.application.secrets.application_name} #{self.tool_mode(env)}"
    end

    def self.config_xml(args = {})
      self.config(args).to_xml(:indent => 2)
    end

    def self.basic_config(code)
      {
        launch_url: "https://#{code}.#{Rails.application.secrets.lti_launch_domain}/lti_launches",
        env: Rails.env,
        title: Rails.application.secrets.lti_tool_name,
        description: Rails.application.secrets.lti_tool_description,
        icon: "No ICO",
        domain: "#{code}.#{Rails.application.secrets.lti_launch_domain}"
      }
    end

    def self.course_navigation_config(code)
      config = self.basic_config(code)
      config[:course_navigation] = {
          text: Rails.application.secrets.lti_tool_name,
          visibility: "admins",
          default: "enabled",
          enabled: true
        }
      config
    end

    def self.account_navigation_config(code)
      config = self.basic_config(code)
      config[:account_navigation] = {
          text: Rails.application.secrets.lti_tool_name,
          visibility: "admins",
          default: "enabled",
          enabled: true
        }
      config
    end

    def self.config(args = {})
      title = args[:title] || self.tool_name(args[:env])

      tc = IMS::LTI::ToolConfig.new(
        title: title, 
        launch_url: args[:launch_url],
        description: args[:description] || "#{Rails.application.secrets.application_name}",
        icon: args[:icon]
      )

      config = {
        'privacy_level' => 'public',
        'domain' => args[:domain]
      }

      if args[:course_navigation].blank? && args[:account_navigation].blank?
        config['resource_selection'] = {
          'url' => args[:launch_url],
          'text' => title,
          'selection_width' => '892',
          'selection_height' => '800'
        }
      end

      if args[:course_navigation].present?
        config['course_navigation'] = {
          'url' => args[:launch_url],
          'default' => args[:course_navigation][:default] || 'enabled',
          'visibility' => args[:course_navigation][:visibility] || 'public',
          'text' => args[:course_navigation][:text],
          'enabled' => args[:course_navigation][:enabled]
        }
      end

      if args[:account_navigation].present?
        config['account_navigation'] = {
          'url' => args[:launch_url],
          'default' => args[:account_navigation][:default] || 'enabled',
          'visibility' => args[:account_navigation][:visibility] || 'public',
          'text' => args[:account_navigation][:text],
          'enabled' => args[:account_navigation][:enabled]
        }
      end
      
      if args[:button_url].present?
        config['editor_button'] = {
          'url' => args[:launch_url],
          'icon_url' => args[:button_url],
          'text' => args[:button_text] || title,
          'selection_width' => '892',
          'selection_height' => '800'
        }
      end

      tc.set_ext_params('canvas.instructure.com', config)
      tc
    end

  end

end