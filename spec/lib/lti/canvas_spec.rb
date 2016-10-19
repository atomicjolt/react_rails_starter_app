require 'rails_helper'

describe Lti::Canvas do
  
  before do
    @launch_url = "http://www.example.com/launch"
    @env = "test"
  end

  describe "config_xml" do
    it "generates basic configuration xml for an LTI tool" do
      args = {
        launch_url: @launch_url,
        env: @env
      }
      xml = Lti::Canvas.config_xml(args)
    end
    it "generates extended configuration xml for an LTI tool with an editor button" do
      button_url = "http://www.example.com/button_image.png"
      button_text = "Custom Button"
      args = {
        launch_url: @launch_url, 
        button_url: button_url, 
        button_text: button_text, 
        env: @env
      }
      xml = Lti::Canvas.config_xml(args)
      expect(xml).to be_present
      expect(xml).to include(@launch_url)
    end
    it "generates extended configuration xml for an LTI tool with a course navigation" do
      course_navigation = {
        text: "Course level tool",
        visibility: "admins",
        default: "enabled",
        enabled: true
      } 
      args = {
        launch_url: @launch_url,
        env: @env,
        course_navigation: course_navigation
      }
      xml = Lti::Canvas.config_xml(args)
      expect(xml).to be_present
      expect(xml).to include(course_navigation[:text])
    end
    it "generates extended configuration xml for an LTI tool with a account navigation" do
      account_navigation = {
        text: "test",
        visibility: "admins",
        default: "enabled",
        enabled: true
      }
      args = {
        launch_url: @launch_url,
        env: @env,
        account_navigation: account_navigation
      }
      xml = Lti::Canvas.config_xml(args)
      expect(xml).to be_present

      expect(xml).to include(account_navigation[:text])
    end
    it "generates xml with the given title" do
      title = "LTI Tool Title"
      args = {
        launch_url: @launch_url,
        title: title
      }
      xml = Lti::Canvas.config_xml(args)
      expect(xml).to be_present
      expect(xml).to include(title)
    end
    it "generates xml with the given description" do
      description = "LTI Tool Description"
      args = {
        launch_url: @launch_url,
        description: description
      }
      xml = Lti::Canvas.config_xml(args)
      expect(xml).to be_present
      expect(xml).to include(description)
    end
  end

end