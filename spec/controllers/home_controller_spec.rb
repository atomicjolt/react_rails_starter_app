require "rails_helper"

RSpec.describe HomeController, type: :controller do
  
  render_views

  before do
    @account = FactoryGirl.create(:account)
    allow(controller).to receive(:current_account).and_return(@account)
  end

  describe "index" do

    it "loads the home page" do
      get :index
      expect(response.status).to eq(200)
    end

    context "Signed In" do
      
      login_user

      it "include LTI instructions" do
        @user.update_attribute(:role, 'admin')
        config = Lti::Canvas.course_navigation_config(@account.code)
        xml = Lti::Canvas.config_xml(config)
        get :index
        expect(response.body).to include(CGI.escapeHTML(xml))
      end
    end

  end

end