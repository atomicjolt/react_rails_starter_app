require "rails_helper"

RSpec.describe Admin::LtiInstallsController, type: :controller do

  before do
    @app = FactoryGirl.create(:lti_application)
    allow(controller).to receive(:current_lti_application).and_return(@app)
  end

  login_user

  describe "GET new" do
    context "user has not authenticated with canvas" do
      it "redirects the user to the canvas authentication page" do
        post :create, {account_ids: [1]}
        expect(response).to redirect_to(new_admin_canvas_authentication_path)
      end
    end
    context "user has authenticated with canvas" do
      before do
        @authentication = FactoryGirl.create(:authentication, user: @user, provider: 'canvas')
      end
      it "displays a form for the user specify the accounts into which to install the LTI tool" do
        get :new
        expect(response).to have_http_status(200)
      end
    end
  end

  describe "POST create" do
    context "user has not authenticated with canvas" do
      it "redirects the user to the canvas authentication page" do
        post :create, { lti_install: {account_ids: ["43460000000000017"]}, lti_application_id: @app.id }
        expect(response).to redirect_to(new_admin_canvas_authentication_path)
      end
    end
    context "user has authenticated with canvas" do
      before do
        @authentication = FactoryGirl.create(:authentication, user: @user, provider: 'canvas')
      end
      it "Adds the LTI tool to the specified accounts" do
        post :create, { lti_install: {account_ids: ["43460000000000017"], course_ids: [""]}, lti_application_id: @app.id }
        expect(response).to have_http_status(200)
      end
      it "Adds the LTI tool to the specified courses" do
        post :create, { lti_install: {account_ids: [""], course_ids: ["43460000000000228"]}, lti_application_id: @app.id }
        expect(response).to have_http_status(200)
      end
    end
    context "No accounts selected" do
      before do
        @authentication = FactoryGirl.create(:authentication, user: @user, provider: 'canvas')
      end
      it "Indicates the LTI tool was not installed" do
        post :create, { lti_install: {account_ids: [], course_ids: []}, lti_application_id: @app.id }
        expect(response).to have_http_status(200)
      end
    end
  end

end
