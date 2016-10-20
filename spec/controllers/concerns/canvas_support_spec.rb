require "rails_helper"

describe ApplicationController, type: :controller do

  before do
    @app = setup_lti_application
    allow(controller).to receive(:current_lti_application).and_return(@app)
    allow(LtiApplication).to receive(:find_by).with(:lti_key).and_return(@app)
  end

  controller do
    include Concerns::CanvasSupport

    def index
      result = canvas_api.proxy('LIST_ACCOUNTS', params, request.body.read)
      response.status = result.code

      render text: result.body
    end
  end

  it "provides access to the canvas api" do
    get :index, lti_key: @app.lti_key, format: :json
    expect(response).to have_http_status(:success)
  end

end