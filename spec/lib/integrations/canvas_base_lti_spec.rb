require 'rails_helper'

describe Integrations::CanvasBaseLti do

  before do
    @existing_tools = [
      {
        "id" => 1,
        "name" => "BLTI Example",
        "description" => "This is for cool things",
        "url" => "http://www.example.com/ims/lti",
        "domain" => nil,
        "privacy_level" => "anonymous",
        "consumer_key" => nil,
        "created_at" => "2037-07-21T13:29:31Z",
        "updated_at" => "2037-07-28T19:38:31Z",
        "custom_fields" => {"key" => "value"},
        "account_navigation" => {"url" => "...", "text" => "..."},
        "user_navigation" => {"url" => "...", "text" => "..."},
        "course_navigation" => {"url" => "...", "text" => "...", "visibility" => "members", "default" => true},
        "editor_button" => {"url" => "...", "text" => "...", "selection_width" => 50, "selection_height" => 50, "icon_url" => "..."},
        "resource_selection" => {"url" => "...", "text" => "...", "selection_width" => 50, "selection_height" => 50}
      }, {
        "id" => 2,
        "name" => "Another BLTI Example",
        "description" => "This one isn't very cool.",
        "url" => "http://www.example.com/launch",
        "domain" => "example.com",
        "privacy_level" => "anonymous",
        "consumer_key" => nil,
        "created_at" => "2037-07-21T13:29:31Z",
        "updated_at" => "2037-07-28T19:38:31Z"
        }
    ]
    @non_existing_tools = []
    @tool_launch_url = "http://www.example.com/launch"
  end

  describe "find_tool_id using the tool's launch url" do
    it "should find the tool id" do
      expect(Integrations::CanvasBaseLti.find_tool_id(@existing_tools, @tool_launch_url)).to eq(2)
    end
    it "doesn't find the tool id" do
      expect(Integrations::CanvasBaseLti.find_tool_id(@non_existing_tools, @tool_launch_url)).to eq(nil)
    end
  end

  describe "find_tool" do
    it "should find the tool using the tool's launch url" do
      expect(Integrations::CanvasBaseLti.find_tool(@existing_tools, @tool_launch_url)).to eq(@existing_tools[1])
    end
    it "doesn't find the tool" do
      expect(Integrations::CanvasBaseLti.find_tool(@non_existing_tools, @tool_launch_url)).to eq(nil)
    end
  end
  
end