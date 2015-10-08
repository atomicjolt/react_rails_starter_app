require 'rails_helper'

describe Integrations::CanvasAccountsLti do
  before do
    @account_name = "a great account name"
    @account_id = 2
    @account = FactoryGirl.create(:account, name: @account_name)
    @token = "test"
    @consumer_key = "key"
    @shared_secret = "secret"
    @lti_launch_url = "http://www.example.com/launch"
    @provider_url = "http://www.example.com"
    @env = "test"
  end

  describe "setup" do
    before do
      @result = JSON.parse(lti_tool_json)
    end
    it "should create a new LTI tool in the specified account" do
      lti_options = {
        launch_url: @lti_launch_url,
        env: @env
      }
      result = Integrations::CanvasAccountsLti.setup(@account, @consumer_key, @shared_secret, @provider_url, @token, lti_options)
      expect(result.parsed_response).to eq(@result)
    end
    it "should update an existing LTI tool in the specified account" do
      lti_launch_url = "https://www.edu-apps.org/tool_redirect?id=ck12"
      lti_options = {
        launch_url: lti_launch_url,
        env: @env
      }
      result = Integrations::CanvasAccountsLti.setup(@account, @consumer_key, @shared_secret, @provider_url, @token, lti_options)
      expect(result.parsed_response).to eq(@result)
    end    
  end

end