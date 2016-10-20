require 'rails_helper'

RSpec.describe Lti::Config do

  before do
    @launch_url = "http://www.example.com/launch"
    @domain = "www.example.com"
    @basic_config = {
      launch_url: "#{@domain}/lti_launches",
      title: "Atomic LTI test",
      description: "This is the test application for the Atomic LTI engine",
      icon: "#{@domain}/images/oauth_icon.png",
      domain: @domain
    }
  end

  describe "course_navigation" do
    it "generates xml to install the lti tool as course navigation" do
      xml = described_class.course_navigation(@basic_config)
    end
  end

  describe "account_navigation" do
    it "generates xml to install the lti tool as account navigation" do
      xml = described_class.account_navigation(@basic_config)
    end
  end

  describe "xml" do
    it "generates basic configuration xml for an LTI tool" do
      args = {
        launch_url: @launch_url,
      }
      xml = described_class.xml(args)
    end
    it "generates extended configuration xml for an LTI tool with an editor button" do
      button_url = "http://www.example.com/button_image.png"
      button_text = "Custom Button"
      args = {
        launch_url: @launch_url,
        button_url: button_url,
        button_text: button_text
      }
      xml = described_class.xml(args)
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
        course_navigation: course_navigation
      }
      xml = described_class.xml(args)
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
        account_navigation: account_navigation
      }
      xml = described_class.xml(args)
      expect(xml).to be_present

      expect(xml).to include(account_navigation[:text])
    end
    it "generates xml with the given title" do
      title = "LTI Tool Title"
      args = {
        launch_url: @launch_url,
        title: title
      }
      xml = described_class.xml(args)
      expect(xml).to be_present
      expect(xml).to include(title)
    end
    it "generates xml with the given description" do
      description = "LTI Tool Description"
      args = {
        launch_url: @launch_url,
        description: description
      }
      xml = described_class.xml(args)
      expect(xml).to be_present
      expect(xml).to include(description)
    end
  end

end