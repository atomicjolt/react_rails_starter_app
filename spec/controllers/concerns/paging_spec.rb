require "rails_helper"

describe ApplicationController, type: :controller do

  controller do
    include Concerns::Paging

    respond_to :json

    def index
      render text: "Page: #{@page} Per Page: #{@per_page}"
    end

  end

  describe "paging" do
    it "should add paging to controller" do
      page = 1
      per_page = 1
      get :index, format: :json
      expect(response).to have_http_status(:success)
      expect(response.body).to eq("Page: #{page} Per Page: #{per_page}")
    end
  end

end