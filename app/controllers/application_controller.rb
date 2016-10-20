class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :current_lti_application

  protected

    rescue_from CanCan::AccessDenied do |exception|
      respond_to do |format|
        format.html { redirect_to root_url, alert: exception.message }
        format.json { render json: { error: exception.message }, status: :unauthorized }
      end
    end

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :name
      devise_parameter_sanitizer.for(:account_update) << :name
    end

    def current_lti_application
      @current_lti_application ||= LtiApplication.find_by(lti_key: params[:oauth_consumer_key])
    end

    def current_ability
      @current_ability ||= Ability.new(current_user)
    end

    def user_not_authorized
      render :file => "public/401.html", :status => :unauthorized
    end

end
