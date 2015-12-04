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
      if !current_user.admin
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

    def find_consumer
      key = params[:oauth_consumer_key].strip
      Account.find_by(lti_key: key) ||
      User.find_by(lti_key: key)
    end

    # **********************************************
    #
    # LTI related functionality:
    #
    def lti_provider
      params[:tool_consumer_instance_guid] ||
      UrlHelper.safe_host(request.referer) ||
      UrlHelper.safe_host(params["launch_presentation_return_url"]) ||
      UrlHelper.safe_host(params["custom_canvas_api_domain"])
    end

    def do_lti

      @provider = IMS::LTI::ToolProvider.new(current_account.lti_key, current_account.lti_secret, params)

      if @provider.valid_request?(request)

        @lti_provider = lti_provider

        @user = current_account.users.find_by(lti_provider: @lti_provider, lti_user_id: params[:user_id])

        if @user
          # If we do LTI and find a different user. Log out the current user and log in the new user.
          # Log the user in
          sign_in(@user, :event => :authentication)
        else
          # Ask them to login or create an account

          # Generate a name from the LTI params
          name = params[:lis_person_name_full] ? params[:lis_person_name_full] : "#{params[:lis_person_name_given]} #{params[:lis_person_name_family]}"
          name = name.strip
          name = params[:roles] if name.blank? # If the name is blank then use their role

          # If there isn't an email then we have to make one up. We use the user_id and instance guid
          email = params[:lis_person_contact_email_primary] || generate_email(params[:user_id])

          @user = User.new(email: email, name: name)
          @user.password              = ::SecureRandom::hex(15)
          @user.password_confirmation = @user.password
          @user.account_id            = current_account.id
          @user.lti_user_id           = params[:user_id]
          @user.lti_provider          = @lti_provider
          @user.lms_user_id           = params[:custom_canvas_user_id] || params[:user_id]
          @user.skip_confirmation!

          count = 0
          while !safe_save_email(@user) && count < 10 do
            # Email was taken. Generate a fake email and save again
            @user.email = generate_email(params[:user_id])
            count = count + 1
          end

          sign_in(@user, :event => :authentication)
        end
      else
        user_not_authorized
      end

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

    # **********************************************
    #
    # Account related functionality:
    #

    def current_account
      @current_account ||= Account.find_by(code: request.subdomains.first) || Account.find_by(domain: request.host) || Account.main
    end

  private

    def current_ability
      @current_ability ||= Ability.new(current_user, current_account)
    end

    def user_not_authorized
      render :file => "public/401.html", :status => :unauthorized
    end

    def generate_email(lti_user_id)
      "#{lti_user_id}@generatedemail.com"
    end

end
