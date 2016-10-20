module Concerns
  module LtiSupport
    extend ActiveSupport::Concern

    protected

      def do_lti
        if valid_lti_request?(current_lti_application.lti_key, current_lti_application.lti_secret)
          if user = user_from_lti
            sign_in(user, event: :authentication)
            return
          end
        end
        user_not_authorized
      end

      def valid_lti_request?(lti_key, lti_secret)
        @tool_provider = IMS::LTI::ToolProvider.new(lti_key, lti_secret, params)
        @tool_provider.valid_request?(request) &&
          Nonce.valid?(@tool_provider.oauth_nonce) &&
          valid_timestamp?(@tool_provider.oauth_timestamp)
      end

      def lti_provider
        @lti_provider ||= params[:tool_consumer_instance_guid] ||
          UrlHelper.safe_host(request.referer) ||
          UrlHelper.safe_host(params["launch_presentation_return_url"]) ||
          UrlHelper.safe_host(params["custom_canvas_api_domain"])
      end

      def user_from_lti

        lti_user_id = params[:user_id]
        user = User.find_by(lti_provider: lti_provider, lti_user_id: lti_user_id)

        if user.blank?
          # Generate a name from the LTI params
          name = params[:lis_person_name_full] ? params[:lis_person_name_full] : "#{params[:lis_person_name_given]} #{params[:lis_person_name_family]}"
          name = name.strip
          name = params[:roles] if name.blank? # If the name is blank then use their role

          # If there isn't an email then we have to make one up. We use the user_id and instance guid
          domain = params["custom_canvas_api_domain"] || Rails.application.secrets.application_url
          email = params[:lis_person_contact_email_primary]
          email = "user-#{params[:user_id]}@#{domain}" if email.blank? && params[:user_id].present?
          email = generate_email(domain) if email.blank? # If there isn't an email then we have to make one up. We use the user_id and instance guid

          user = User.new(email: email, name: name)
          user.password              = ::SecureRandom::hex(15)
          user.password_confirmation = user.password
          user.lti_user_id           = lti_user_id
          user.lti_provider          = lti_provider
          user.lms_user_id           = params[:custom_canvas_user_id] || params[:user_id]
          user.skip_confirmation!

          count = 0 # don't go infinite
          while !safe_save_email(user) && count < 10 do
            user.email = generate_email(domain)
            count = count + 1
          end

        end

        user
      end

    private

      def valid_timestamp?(timestamp)
        Time.at(timestamp.to_i) >= (Time.now - 1.hour)
      end

      def generate_email(domain)
        "generated-#{User.maximum(:id).next}@#{domain}"
      end

      def safe_save_email(user)
        begin
          user.save!
        rescue ActiveRecord::RecordInvalid => ex
          if ex.to_s == "Validation failed: Email has already been taken"
            false
          else
            raise ex
          end
        end
      end

  end
end