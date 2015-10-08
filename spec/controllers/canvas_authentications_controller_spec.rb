require "rails_helper"

RSpec.describe CanvasAuthenticationsController, :type => :controller do
  
  describe "GET new" do
    it "displays a form for the user to enter their Canvas url" do
      get :new
      expect(response).to have_http_status(200)
    end
  end

  describe "POST create" do
    describe "with valid canvas url" do
      it "redirects to the canvas omniauth path" do
        post :create, {canvas_url: Rails.application.secrets.canvas_url}
        expect(response).to be_redirect 
      end
    end
    describe "empty canvas url" do
      it "warns the user and renders the new page" do
        post :create, {canvas_url: ''}
        expect(response).to have_http_status(200)
      end
    end
    describe "with invalid canvas url" do
      it "warns the user and renders the new page" do
        post :create, {canvas_url: 'www .example.com'}
        expect(response).to have_http_status(200)
      end
    end
  end

end
