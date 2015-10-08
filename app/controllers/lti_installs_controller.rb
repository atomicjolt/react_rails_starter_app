class LtiInstallsController < ApplicationController

  before_filter :authenticate_user!
  before_filter :validate_account!
  before_filter :setup, only: [:new, :create]

  def new
  end

  def xml
    @config_xml = Lti::Canvas.config_xml(lti_options)
  end

  def create
    account_errors, @account_installs = setup_lti(main_account, lti_options, Integrations::CanvasAccountsLti, @accounts, :account_ids)
    course_errors, @course_installs = setup_lti(main_account, lti_options, Integrations::CanvasCoursesLti, @courses, :course_ids)
    @errors = account_errors.concat(course_errors)
  end

  private 

    def main_account
      current_user.account
    end

    def lti_options
      account_code = "#{main_account.code}"
      {
        launch_url: "https://#{account_code}.#{Rails.application.secrets.lti_launch_domain}/lti_launches",
        env: Rails.env,
        title: Rails.application.secrets.lti_tool_name,
        description: Rails.application.secrets.lti_tool_description,
        icon: "No ICO",
        domain: "#{account_code}.#{Rails.application.secrets.lti_launch_domain}",
        course_navigation: {
          text: Rails.application.secrets.lti_tool_name,
          visibility: "admins",
          default: "enabled",
          enabled: true
        } 
      }
    end

    # This method finds the accounts or courses that were selected by the user, generates
    # the LTI xml to setup the tool for that account or course and calls the 'setup' method
    # of either Integrations::CanvasAccountsLti or Integrations::CanvasCoursesLti to
    # install the LTI tool into the account or course.
    #
    # account       - the install will use this accounts lti_key and lti_secrety to setup the tool
    # lti_options   - the LTI options to pass to the setup method of the lti_interface
    # lti_interface - either Integrations::CanvasAccountsLti or Integrations::CanvasCoursesLti
    # collections   - either @accounts or @courses that were built by the 'setup' method
    # field         - either :account_ids or :course_ids
    #
    def setup_lti(account, lti_options, lti_interface, collections, field)
      errors = []
      installs = []
      collections.each do |auth, collection|
        # Install the LTI tool by calling setup on the lti_interface 
        collection.find_all{|a| params[:lti_install][field].include?(a['id'].to_s) }.each do |obj|
          result = lti_interface.method("setup").call(
            obj, 
            account.lti_key, 
            account.lti_secret,
            auth.provider_url,
            auth.token, 
            lti_options
          )
          # Check the result to make sure there wasn't an error
          if(!result['id'])
            errors << obj
          else
            installs << obj
          end
        end
      end
      [errors, installs]
    end

    def setup
      authentications = current_user.authentications.where(provider: 'canvas')
      @accounts = {}
      @courses = {}

      if authentications.present?
        authentications.each do |auth|
          api = Canvas.new(auth.provider_url, auth.token)
          @accounts[auth] = api.all_accounts.map{|a| OpenStruct.new(a.merge(auth: auth)) }
          @courses[auth] = api.courses.map{|a| OpenStruct.new(a.merge(auth: auth)) }
        end
      else
        flash[:info] = "Please authenticate with Canvas before attempting to install an LTI tool"
        redirect_to new_canvas_authentication_path
      end
    end

    def validate_account!
      if !current_user.account.present?
        flash[:notice] = "No valid account was detected for the current user. Please sign in again."
        sign_out(current_user)
        redirect_to new_user_session_path
      end
    end

end