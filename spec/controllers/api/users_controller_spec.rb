require "rails_helper"

RSpec.describe Api::UsersController, type: :controller do
  
  before do
    
    @account = FactoryGirl.create(:account)
    user1 = FactoryGirl.attributes_for(:user)
    @account.users.create(user1)
    user2 = FactoryGirl.attributes_for(:user)
    @account.users.create(user2)
    user3 = FactoryGirl.attributes_for(:user)
    @account.users.create(user3)

    @user = FactoryGirl.create(:user, account: @account)
    @user.confirm

    @admin = CreateAdminService.create_admin(@account)

    @user_token = AuthToken.issue_token({ user_id: @user.id })
    @admin_token = AuthToken.issue_token({ user_id: @admin.id })

  end

  context "as user" do
    before do
      request.headers['Authorization'] = @user_token
    end

    describe "GET index" do
      it "should not be authorized" do
        get :index, account_id: @account, format: :json
        expect(response).to have_http_status(:unauthorized)
      end
    end

  end

  context "as admin" do
    before do
      request.headers['Authorization'] = @admin_token
    end

    describe "GET index" do
      it "should render users for the given account" do
        get :index, account_id: @account, format: :json
        expect(response).to have_http_status(:success)
      end
    end

    describe "POST create" do
      describe "with valid params" do
        it "creates the user and returns the object as json" do
          params = FactoryGirl.attributes_for(:user)
          post :create, account_id: @account, user: params, format: :json
          expect(JSON.parse(response.body)['name']).to eq(params[:name])
        end
      end
      describe "with invalid params" do
        it "returns an error" do
          params = FactoryGirl.attributes_for(:user)
          params[:email] = nil
          post :create, account_id: @account, user: params, format: :json
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe "PUT update" do
      before do
        @user = FactoryGirl.create(:user)
      end
      
      describe "with valid params" do
        it "updates the user and returns the object as json" do
          new_name = "Billy Joel"
          params = {
            name: new_name
          }
          put :update, account_id: @account, id: @user.id, user: params, format: :json
          expect(response).to have_http_status(:success)
          expect(JSON.parse(response.body)['name']).to eq(new_name)
        end
      end

      describe "with invalid params" do
        it "returns an error" do
          params = @user.attributes
          params[:email] = nil
          put :update, account_id: @account, id: @user.id, user: params, format: :json
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

  end

end