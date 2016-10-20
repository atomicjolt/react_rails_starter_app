require "rails_helper"

describe ApplicationController, type: :controller do

  render_views

  before do
    @app = setup_lti_application
    allow(controller).to receive(:current_lti_application).and_return(@app)
    allow(LtiApplication).to receive(:find_by).with(:lti_key).and_return(@app)
  end

  describe "a user using Safari" do
    controller do
      include Concerns::IframeSupport

      before_action :check_for_iframes_problem

      def index
        render text: ""
      end
    end
    before do
      request.env['HTTP_USER_AGENT'] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Safari/602.1.50"
    end
    it "redirects to allow for cookies in the iframe" do
      post :index
      expect(response).to have_http_status(:success)
      expect(response.body).to include("iframe_cookies_fix_redirect?redirect")
    end
  end

  context "as an instructor without an api token" do
    controller do
      include Concerns::LtiSupport
      include Concerns::IframeSupport

      skip_before_filter :verify_authenticity_token
      before_action :do_lti
      before_action :check_for_user_auth

      def index
        render text: ""
      end
    end
    before do
      request.env['CONTENT_TYPE'] = "application/x-www-form-urlencoded"
    end
    it "should ask the user to obtain an API token" do
      params = lti_params({"launch_url" => lti_launches_url, "roles" => "Learner"})
      post :index, params
      expect(response).to have_http_status(302)
      expect(response).to redirect_to(user_canvas_omniauth_authorize_path(:canvas_url => @app.canvas_uri))
    end

  end

end