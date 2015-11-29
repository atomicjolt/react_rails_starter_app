class LtiLaunchesController < ApplicationController

  layout "bare"
  
  skip_before_filter :verify_authenticity_token
  before_action :check_for_iframes_problem, :only => [:index]
  before_action :do_lti, :only => [:index]
  before_action :check_for_user_auth, :only => [:index]

  def index
  end

  def check_for_iframes_problem
    agent = request.env['HTTP_USER_AGENT']
    if ((cookies.count == 0 && agent) && (
         agent.match(/[^\(]*[^\)]Safari\//) || 
         agent.match(/[^\(]*[^\)]MSIE\//)
       ))
      @redirect_url = request.referer
      render layout: false, action: 'iframe_cookies_fix'
    end
  end

  def iframe_cookies_fix_redirect
    render layout: false
  end

  def relaunch_lti_tool
    @redirect_url = session[:canvas_lti_tool_uri]
    render layout: false
  end

  def check_for_user_auth
    unless current_user.authentications.find_by(provider_url: current_account.canvas_uri)
      session[:canvas_lti_tool_uri] = request.referer
      session[:canvas_url] = current_account.canvas_uri
      redirect_to user_omniauth_authorize_path(:canvas, :canvas_url => current_account.canvas_uri)
    end
  end

end
