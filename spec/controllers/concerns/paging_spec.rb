require "rails_helper"

describe ApplicationController, type: :controller do

  controller do
    include Concerns::Paging

    respond_to :json

    def index

    end
  end

  describe "paging" do
    it "should add paging to controller" do
      get :index, format: :json
      expect(response).to have_http_status(:success)
    end
  end

end