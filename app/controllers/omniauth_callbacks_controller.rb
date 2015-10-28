class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  before_filter :verify_oauth_response, :except => [:passthru]
  before_filter :associated_using_oauth, :except => [:passthru]
  before_filter :find_using_oauth, :except => [:passthru]
  before_filter :create_using_oauth, :except => [:passthru]

  def passthru
    render :file => "#{Rails.root}/public/404.html", :status => 404, :layout => false
  end

  def canvas
    canvas_url = session[:canvas_url].strip
    auth = @user.authentications.find_by(provider_url: canvas_url, provider: 'canvas')
    
    # Option 1
    # Assume that accounts will be created through seeds or an admin ui.
    # We get the 'code' using the subdomain of the request which will be something like
    # tmp.ngrok.io
    
    code = request.subdomains.first 

    # Option 2
    # Build new accounts based on the canvas_url subdomain.
    # This will build new accounts using the canvas url. 
    # i.e. Doing the OAuth dance with http://atomicjolt.instructure.com will result
    # in a new account with code 'atomicjolt'

    # url = URI.parse(canvas_url)
    # code = url.hostname.split('.')[0]

    account = Account.find_by(code: code)

    if account.blank?
      # This is the first time. Create an account based on the Canvas subdomain.
      account = Account.create!(
        name: code,
        code: code,
        domain: "#{code}.#{request.domain}",
        canvas_uri: canvas_url
      )
    end

    # If the account canvas token has been set and the user is an admin, grab the token
    # and store it for account level access.
    # The first admin user to log in sets the account level token.
    if account.canvas_token.blank?
      api = Canvas.new(auth.provider_url, auth.token)
      if api.is_account_admin
        account.canvas_token = auth.token
        account.save!
      end
    end

    @user.account_id = account.id
    @user.add_account(account)

    @user.save!

    create_external_identifier_with_url(auth, @user)
    flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => 'Canvas'
    redirect_to '/'
  end

  protected

    def verify_oauth_response
      # Check for OAuth errors
      if request.env["omniauth.auth"].blank?
        # Keep these and use them for debugging omniauth.
        # exception = env['omniauth.error']
        # error_type = env['omniauth.error.type']
        # strategy = env['omniauth.error.strategy']
        # exception.error_reason
        if request.env["omniauth.strategy"].present? && request.env["omniauth.strategy"].name.present?
          error = "There was a problem communicating with #{request.env["omniauth.strategy"].name.titleize}."
        else
          error = "There was a problem communicating with the remote service. "
        end
        if request.env["omniauth.strategy"].name == 'canvas'
          flash[:error] = "#{error}"
        else
          flash[:error] = "#{error} If this problem persists try signing up with a different service or create an #{Rails.application.secrets.application_name} account with just an email and password.".html_safe
        end
        if request.env["omniauth.origin"].present?
          redirect_to request.env["omniauth.origin"]
        else
          redirect_to new_user_registration_url
        end
      end
    end

    def associated_using_oauth
      # Used at the profile#edit to integrated other networks to the same account
      if user_signed_in?
        @user = current_user
        auth = request.env["omniauth.auth"]
        kind = params[:action].titleize # Should give us Facebook, Twitter, Linked In, etc
        authentication = current_user.associate_account(auth)
        current_user.save!
        check_external_identifier(@user)
        flash[:notice] = "Your #{Rails.application.secrets.application_name} account has been associated with #{kind}"
        redirect_to after_sign_in_path_for(current_user) if should_redirect?
      end
    rescue ActiveRecord::RecordInvalid => ex
      if authentication
        if authentication.errors[:provider].length > 0
          user_link = 'user'
          if previous_authentication = Authentication.find_by(provider: auth['provider'], uid: auth['uid'])
            user_link = %Q{<a href="#{user_profile_path(previous_authentication.user)}">#{previous_authentication.user.display_name}</a>}
          end
          message = "Another #{Rails.application.secrets.application_name} account: #{user_link} has already been associated with the specified #{auth['provider']} account."
        else
          message = authentication.errors.full_messages.join('<br />')
        end
      else
        message = "#{ex}"
      end
      flash[:error] = "Your #{Rails.application.secrets.application_name} account could not be associated with this account: #{message}".html_safe
      redirect_to after_sign_in_path_for(current_user)
    end

    def find_using_oauth
      return if @user # Previous filter was successful and we already have a user
      @user = User.find_for_oauth(request.env["omniauth.auth"])
      if @user
        @user.update_oauth(request.env["omniauth.auth"])
        @user.add_account(current_account)
        @user.skip_confirmation!
        @user.save # do we want to log an error if save fails?
        check_external_identifier(@user)
        sign_in_or_register(params[:action].titleize)
      end
    end

    def create_using_oauth
      return if @user # Previous filter was successful and we already have a user
      auth = request.env["omniauth.auth"]
      kind = params[:action].titleize # Should give us Facebook, Twitter, Linked In, etc
      @user = User.new
      @user.apply_oauth(auth)
      @user.account_id = current_account.id
      @user.add_account(current_account)
      @user.skip_confirmation!
      @user.save!
      check_external_identifier(@user)
      sign_in_or_register(kind)
    rescue ActiveRecord::RecordInvalid => ex
      # A user is already registered with the same email and he tried to sign in using facebook but the account is not connected to facebook.
      if @user.errors[:email].include? I18n.t :taken, scope: [:errors, :messages]
        session[:prompt_setup_service] = kind
        flash[:notice] = "There's already an account with the same email as your #{kind} account.
          Please login first and then connect your #{kind} account to login with #{kind} in the future."
        redirect_to sign_in_url
      # Sign up from social networks without email (twitter and linkedin)
      elsif @user.errors[:email].include? I18n.t :blank, scope: [:errors, :messages]
        session["devise.omniauth_data"] = auth
        flash[:notice] = "Please add an email to associate with this account"
        redirect_to new_user_registration_url
      else
        raise ex
      end
    end

    def sign_in_or_register(kind)
      sign_in(@user, :event => :authentication)
      if should_redirect?
        flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => kind
        redirect_to after_sign_in_path_for(@user)
      end
    end

    def should_redirect?
      return false if ['canvas'].include?(params[:action]) # Don't redirect we need to do more configuration
      true
    end

end
