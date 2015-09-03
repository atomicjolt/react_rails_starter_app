require "rails_helper"

RSpec.describe AdminController, type: :controller do
  
  describe "GET index" do
    it "loads the admin react application" do
      get :index
      expect(response).to have_http_status(200)
    end
  end

end