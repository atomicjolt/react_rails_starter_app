# NOTE if using check_for_user_auth you must include the LtiSuppor concern first:
# include Concerns::LtiSupport

# include iframe support and add before action if iframe support is required
# include Concerns::IframeSupport
# before_action :check_for_iframes_problem
# before_action :check_for_user_auth

module Concerns

  module IframeSupport

    extend ActiveSupport::Concern

    # IE and Safari don't let you set cookies when you are loaded in an iframe and
    # the user has not visited your website before. To deal with this, we load
    # Javascript which opens a page in the top level window that sets a cookie
    # and redirect back to the canvas url that launches our lti tool
    def check_for_iframes_problem
      agent = request.env['HTTP_USER_AGENT']
      if ((cookies.count == 0 && agent) && (
           (agent.match(/[^\(]*[^\)]Safari\//) && !agent.match(/[^\(]*[^\)]Chrome\//)) ||
           agent.match(/[^\(]*[^\)]MSIE\//)
         ))
        @redirect_url = request.referer # this is the Canvas LTI Launch URL
        render layout: false, template: 'iframe_support/iframe_cookies_fix'
      end
    end

    # redirects back to the lti tool after having set cookies (for Safari and IE)
    def iframe_cookies_fix_redirect
      render layout: false
    end

    # we have to ask Canvas to reload us since we need the lti params / signature
    def relaunch_lti_tool
      @redirect_url = session[:canvas_lti_tool_uri]
      render layout: false
    end

    # This forces the user to obtain an API token via OAuth
    # This should be based on roles. Default is instructor.
    # This depends on the lti_support concern
    def check_for_user_auth
      # if you need to check for different roles, see: https://github.com/instructure/ims-lti/blob/master/lib/ims/lti/role_checks.rb
      if !@lti_provider.context_student?
        unless current_user.authentications.find_by(provider_url: current_lti_application.canvas_uri)

          # store the lti launch url in the session, so we can relaunch the tool after the oauth
          session[:canvas_lti_tool_uri] = request.referer
          session[:canvas_url] = current_lti_application.canvas_uri
          redirect_to user_canvas_omniauth_authorize_path(:canvas_url => current_lti_application.canvas_uri)
        end
      end
    end

  end
end
