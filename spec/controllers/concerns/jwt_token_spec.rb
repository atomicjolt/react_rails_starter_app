require "rails_helper"

describe ApplicationController, type: :controller do

  controller do
    include JwtToken

    before_action :validate_token
    respond_to :json

    def index

    end
  end

  context "no authorization header" do
    it "should not be authorized" do
      get :index, format: :json
      expect(response).to have_http_status(:unauthorized)
    end
  end

  context "invalid authorization header" do
    it "should not be authorized" do
      request.headers['Authorization'] = "A fake header"
      get :index, format: :json
      expect(response).to have_http_status(:unauthorized)
    end
  end

  context "valid authorization header" do
    it "should be authorized" do
      user = FactoryGirl.create(:user)
      user.confirm
      user_token = AuthToken.issue_token({ user_id: user.id })
      request.headers['Authorization'] = user_token
      get :index, format: :json
      expect(response).to have_http_status(:success)
    end
  end

end