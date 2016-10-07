require "rails_helper"

RSpec.describe Api::JwtsController, type: :controller do

  before do
    @user = FactoryGirl.create(:user, account: @account)
    @user.confirm
    @user_token = AuthToken.issue_token({ user_id: @user.id })
  end

  context "as user" do
    describe "GET show" do
      it "should not be authorized" do
        get :show, id: @user.id, format: :json
        expect(response).to have_http_status(:unauthorized)
      end
      it "should get a new jwt" do
        request.headers['Authorization'] = @user_token
        get :show, id: @user.id, format: :json
        expect(response).to have_http_status(:success)
        result = JSON.parse(response.body)
        expect(result['jwt']).to be_present
      end
    end

  end

end