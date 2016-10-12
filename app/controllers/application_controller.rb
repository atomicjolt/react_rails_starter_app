class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  helper_method :current_account

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


    # **********************************************
    # JWT methods
    #

    class InvalidTokenError < StandardError; end

    def validate_token
      begin
        authorization = request.headers['Authorization']
        raise InvalidTokenError if authorization.nil?

        token = request.headers['Authorization'].split(' ').last
        decoded_token = AuthToken.valid?(token)

        raise InvalidTokenError if Rails.application.secrets.auth0_client_id != decoded_token[0]["aud"]

        @user = User.find(decoded_token[0]['user_id'])
        sign_in(@user, :event => :authentication)
      rescue JWT::DecodeError, InvalidTokenError
        render :json => { :error => "Unauthorized: Invalid token." }, status: :unauthorized
      end
    end

    # **********************************************
    # Admin methods
    #
    def check_admin
      if !current_user.admin?
        respond_to do |format|
          format.json {
            render json: { error: "Unauthorized: User not allowed to access requested resource." }, status: :unauthorized
          }
        end
      end
    end

    # **********************************************
    # Paging methods
    #

    def setup_paging
      @page = (params[:page] || 1).to_i
      @page = 1 if @page < 1
      @per_page = (params[:per_page] || (::Rails.env=='test' ? 1 : 40)).to_i
    end

    def set_will_paginate_string
      # Because I18n.locale are dynamically determined in ApplicationController,
      # it should not put in config/initializers/will_paginate.rb
      WillPaginate::ViewHelpers.pagination_options[:previous_label] = "previous"
      WillPaginate::ViewHelpers.pagination_options[:next_label] = "next"
    end

    def setup_will_paginate
      setup_paging
      set_will_paginate_string
    end

    # **********************************************
    #
    # OAuth related functionality:
    #

    def check_external_identifier(user, only_build=false)
      if session[:external_identifier]
        exid = user.external_identifiers.build(:identifier => session[:external_identifier], :provider => session[:provider])
        exid.save! unless only_build
        session[:external_identifier] = nil
        session[:provider] = nil
        exid
      end
    end

    def create_external_identifier_with_url(auth, user)
      json = Yajl::Parser.parse(auth['json_response'])
      key = UrlHelper.host(json['info']['url'])
      user.external_identifiers.create(:identifier => auth.uid, :provider => key) # If they already have an exernal identifier this can just fail silently
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


  private

    def current_ability
      @current_ability ||= Ability.new(current_user, current_account)
    end

    def user_not_authorized
      render :file => "public/401.html", :status => :unauthorized
    end

end
