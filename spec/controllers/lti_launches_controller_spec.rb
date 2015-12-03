require "rails_helper"

RSpec.describe LtiLaunchesController, type: :controller do
  
  before do
    @account = setup_lti_account
    
    allow(controller).to receive(:current_account).and_return(@account)
    allow(Account).to receive(:find_by).with(:lti_key).and_return(@account)

    @user = FactoryGirl.create(:user, account: @account, lti_user_id: "292832126") # identifier is from lti_params in support/lti.rb
    @lti_url = 'school.edu'
  end

  describe "index" do

    describe "LTI" do
      before do
        request.env['CONTENT_TYPE'] = "application/x-www-form-urlencoded"
      end

      describe "POST - correct params" do

        context "as a student" do

          it "sets up the user, logs them in and redirects" do
            params = lti_params({"launch_url" => lti_launches_url, "roles" => "Learner"})
            post :index, params
            expect(response).to have_http_status(200)
            expect(assigns(:user)).to be
            expect(assigns(:user).email).to eq(params["lis_person_contact_email_primary"])
          end

        end

        context "as an instructor without an authorization" do

          it "should ask them to authorize the lti app" do
            params = lti_params({"launch_url" => lti_launches_url, "roles" => "Instructor"})
            post :index, params
            expect(response).to have_http_status(302)
            expect(response).to redirect_to(user_omniauth_authorize_path(:canvas, :canvas_url => @account.canvas_uri))
            expect(assigns(:user)).to be
            expect(assigns(:user).email).to eq(params["lis_person_contact_email_primary"])
          end

        end
      end

      describe "POST - invalid params" do
        it "should return unauthorized status" do
          params = lti_params({"launch_url" => lti_launches_url})
          params[:context_title] = 'invalid'
          post :index, params
          expect(response).to have_http_status(401)
        end
      end

    end

  end

end