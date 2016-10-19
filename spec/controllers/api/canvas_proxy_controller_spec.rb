require "rails_helper"

RSpec.describe Api::CanvasProxyController, type: :controller do
  
  before do
    @account = FactoryGirl.create(:account, canvas_uri: "www.example.com", canvas_token: "asdfasdf")
    @user = FactoryGirl.create(:user, account: @account)
    @user.confirm
    @user_token = AuthToken.issue_token({ user_id: @user.id })
  end

  describe "proxy without authorization" do
    describe "GET" do
      it "should return an unauthorized" do
        get :proxy, type: "foo", format: :json
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe "proxy" do

    before do
      request.headers['Authorization'] = @user_token
      allow(controller.request).to receive(:host).and_return(@account.domain)
    end

    describe "GET" do
      it "should successfully call the canvas api" do
        type = "LIST_ACCOUNTS"
        get :proxy, type: type, format: :json
        expect(response).to have_http_status(:success)
      end
      it "should successfully call the canvas api to generate a url to get courses" do
        type = "LIST_YOUR_COURSES"
        get :proxy, type: type, account_id: 1, format: :json
        expect(response).to have_http_status(:success)
      end
      it "should successfully call the canvas api to generate a url to get courses with extra params" do
        type = "LIST_YOUR_COURSES"
        get "proxy", type: type, account_id: 1, include: [1, 2], per_page: 100, format: :json
        expect(response).to have_http_status(:success)
      end
    end

    describe "POST" do
      it "successfully posts to the canvas api" do
        type = "CREATE_NEW_SUB_ACCOUNT"
        post :proxy, { account: { name: "Canvas Demo Courses" }, type: type, account_id: 1 }, format: :json
        expect(JSON.parse(response.body)['name']).to eq("Canvas Demo Courses")
      end
    end

    describe "PUT" do
      it "successfully puts to the canvas api" do
        type = "UPDATE_ACCOUNT"
        put :proxy, type: type, id: 1, name: "Canvas Demo Courses", format: :json
        expect(JSON.parse(response.body)['name']).to eq("Canvas Demo Courses")
      end
    end

  end

end
