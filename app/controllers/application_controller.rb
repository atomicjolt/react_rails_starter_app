class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

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
          domain = params["custom_canvas_api_domain"] || Rails.application.secrets.application_url
          email = params[:lis_person_contact_email_primary]
          email = "user-#{params[:user_id]}@#{domain}" if email.blank? && params[:user_id].present?
          email = generate_email(domain) if email.blank? # If there isn't an email then we have to make one up. We use the user_id and instance guid

          @user = User.new(email: email, name: name)
          @user.password              = ::SecureRandom::hex(15)
          @user.password_confirmation = @user.password
          @user.account_id            = current_account.id
          @user.lti_user_id           = params[:user_id]
          @user.lti_provider          = @lti_provider
          @user.admin                 = @provider.institution_admin?
          @user.lms_user_id           = params[:custom_canvas_user_id] || params[:user_id]
          @user.skip_confirmation!

          count = 0 # don't go infinite
          while !safe_save_email(@user) && count < 10 do
            @user.email = generate_email(domain)
            count = count + 1
          end

          sign_in(@user, :event => :authentication)
        end
      else
        user_not_authorized
      end

    end

  private

    def current_ability
      @current_ability ||= Ability.new(current_user)
    end

    def user_not_authorized
      render :file => "public/401.html", :status => :unauthorized
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
