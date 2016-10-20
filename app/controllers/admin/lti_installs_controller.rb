class Admin::LtiInstallsController < ApplicationController

  before_filter :authenticate_user!
  before_filter :setup, only: [:new, :create]

  def index
    @lti_applications = LtiApplication.order(:name)
  end

  def show
    lti_application = LtiApplication.find(params[:id])
    config = {
      title: lti_application.name,
      launch_url: lti_launches_url,
      description: lti_application.description
    }
    @config_xml = Lti::Config.xml(config)
  end

  def new
  end

  def create
    lti_application = LtiApplication.find(params[:lti_application_id])
    config = {
      title: lti_application.name,
      launch_url: lti_launches_url,
      description: lti_application.description
    }
    account_errors, @account_installs = setup_lti(lti_application, config, Integrations::CanvasAccountsLti, @accounts, :account_ids)
    course_errors, @course_installs = setup_lti(lti_application, config, Integrations::CanvasCoursesLti, @courses, :course_ids)
    @errors = account_errors.concat(course_errors)
  end

  private

    # This method finds the accounts or courses that were selected by the user, generates
    # the LTI xml to setup the tool for that lti_application or course and calls the 'setup' method
    # of either Integrations::CanvasAccountsLti or Integrations::CanvasCoursesLti to
    # install the LTI tool into the lti_application or course.
    #
    # lti_application - the install will use this applications lti_key and lti_secrety to setup the tool
    # lti_options   - the LTI options to pass to the setup method of the lti_interface
    # lti_interface - either Integrations::CanvasAccountsLti or Integrations::CanvasCoursesLti
    # collections   - either @accounts or @courses that were built by the 'setup' method
    # field         - either :account_ids or :course_ids
    #
    def setup_lti(lti_application, lti_options, lti_interface, collections, field)
      errors = []
      installs = []
      collections.each do |auth, collection|
        # Install the LTI tool by calling setup on the lti_interface
        collection.find_all{|a| params[:lti_install][field].include?(a['id'].to_s) }.each do |obj|
          result = lti_interface.method("setup").call(
            obj,
            lti_application.lti_key,
            lti_application.lti_secret,
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
          options = {
            client_id: Rails.application.secrets.developer_id,
            client_secret: Rails.application.secrets.developer_key,
            redirect_uri: "https://#{request.host}/auth/canvas/callback",
            refresh_token: auth.refresh_token
          }
          api = Canvas.new(auth.provider_url, auth, options)
          @accounts[auth] = api.all_accounts.map{|a| OpenStruct.new(a.merge(auth: auth)) }
          @courses[auth] = api.proxy("LIST_YOUR_COURSES", {}, nil, true).map{|a| OpenStruct.new(a.merge(auth: auth)) }
        end
      else
        flash[:info] = "Please authenticate with Canvas before attempting to install an LTI tool"
        redirect_to new_admin_canvas_authentication_path
      end
    end

end