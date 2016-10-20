module Concerns
  module CanvasSupport
    extend ActiveSupport::Concern

    protected

      def canvas_api
        if current_lti_application.canvas_token.present?
          Canvas.new(current_lti_application.canvas_uri, current_lti_application.canvas_token)
        elsif auth = canvas_auth(current_lti_application)
          options = {
            client_id: Rails.application.secrets.developer_id,
            client_secret: Rails.application.secrets.developer_key,
            redirect_uri: "https://#{request.host}/auth/canvas/callback",
            refresh_token: auth.refresh_token
          }
          Canvas.new(current_lti_application.canvas_uri, auth, options)
        else
          nil
        end
      end

      def canvas_auth(current_lti_application)
        current_user.authentications.find_by(provider_url: current_lti_application.canvas_uri)
      end

  end
end