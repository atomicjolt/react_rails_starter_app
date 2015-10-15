require "rails_helper"

RSpec.describe Api::AccountsController, type: :controller do

  before do
    @account = FactoryGirl.create(:account)
    @account2 = FactoryGirl.create(:account)
    @user = FactoryGirl.create(:user, account: @account)
    @user.confirm

    @admin = CreateAdminService.new.call

    @account_admin = FactoryGirl.create(:user, account: @account2)
    @user.confirm
    @account_admin.make_account_admin({account_id: @account2.id})

    @user_token = AuthToken.issue_token({ user_id: @user.id })
    @admin_token = AuthToken.issue_token({ user_id: @admin.id })
    @account_admin_token = AuthToken.issue_token({ user_id: @account_admin.id })
  end

  context "as user" do
    before do
      request.headers['Authorization'] = @user_token
      allow(controller.request).to receive(:host).and_return(@account.domain)
    end

    describe "GET index" do
      it "should not be authorized" do
        get :index, format: :json
        expect(response).to have_http_status(:unauthorized)
      end
    end

  end

  context "as admin" do
    before do
      request.headers['Authorization'] = @admin_token
      allow(controller.request).to receive(:host).and_return(@account.domain)
    end

    describe "GET index" do
      it "should render accounts" do
        get :index, format: :json
        expect(response).to have_http_status(:success)
      end
    end

    describe "POST create" do
      describe "with valid params" do
        it "creates the account and returns the object as json" do
          params = FactoryGirl.attributes_for(:account)
          post :create, account: params, format: :json
          expect(JSON.parse(response.body)['name']).to eq(params[:name])
        end
      end
      describe "with invalid params" do
        it "returns an error" do
          params = FactoryGirl.attributes_for(:account)
          params[:code] = nil
          post :create, account: params, format: :json
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

    describe "PUT update" do
      before do
        @account = FactoryGirl.create(:account)
      end

      describe "with valid params" do
        it "updates the account and returns the object as json" do
          params = @account.attributes
          new_name = "A Different Account Name"
          params[:name] = new_name
          put :update, id: @account.id, account: params, format: :json
          expect(response).to have_http_status(:success)
          expect(JSON.parse(response.body)['name']).to eq(new_name)
        end
      end

      describe "with invalid params" do
        it "returns an error" do
          params = @account.attributes
          params[:code] = nil
          put :update, id: @account.id, account: params, format: :json
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

  end

  context "as account admin" do
    before do
      request.headers['Authorization'] = @account_admin_token
      allow(controller.request).to receive(:host).and_return(@account2.domain)
    end

    describe "GET index" do
      it "should render accounts" do
        get :index, format: :json
        expect(response).to have_http_status(:success)
      end
    end

    describe "POST create" do
      describe "with valid params" do
        it "returns unauthorized" do
          params = FactoryGirl.attributes_for(:account)
          post :create, account: params, format: :json
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end

    describe "PUT update" do
      describe "with valid params" do
        it "updates the account and returns the object as json" do
          params = @account2.attributes
          new_name = "A Different Account Name"
          params[:name] = new_name
          put :update, id: @account2.id, account: params, format: :json
          expect(response).to have_http_status(:success)
          expect(JSON.parse(response.body)['name']).to eq(new_name)
        end

        it "returns unauthorized" do

        end
      end

      describe "with invalid params" do
        it "returns an error" do
          params = @account2.attributes
          params[:code] = nil
          put :update, id: @account2.id, account: params, format: :json
          expect(response).to have_http_status(:unprocessable_entity)
        end
      end
    end

  end

end
