require 'rails_helper'

RSpec.describe LtiApplication, type: :model do

  describe "create lti application" do
    before do
      @canvas_uri = "example.com"
    end

    it "sets a default lti key" do
      name = "test"
      app = described_class.create!(name: name, canvas_uri: @canvas_uri)
      expect(app.lti_key).to eq(name)
    end

    it "sets a default secret" do
      app = described_class.create!(name: "test", canvas_uri: @canvas_uri)
      expect(app.lti_secret).to be_present
    end

    it "sets a valid lti_key using the name" do
      name = "A Test"
      app = described_class.create!(name: name, canvas_uri: @canvas_uri)
      expect(app.lti_key).to eq("a-test")
    end

    it "doesn't set lti_key if the lti_key is already set" do
      name = "test"
      lti_key = "the-lti-key"
      app = described_class.create!(
        name: name,
        canvas_uri: @canvas_uri,
        lti_key: lti_key
      )
      expect(app.lti_key).to eq(lti_key)
    end

    it "requires a name" do
      expect {
        described_class.create!(canvas_uri: @canvas_uri)
      }.to raise_exception(ActiveRecord::RecordInvalid)
    end

    it "requires a canvas_uri" do
      expect {
        described_class.create!(name: "test")
      }.to raise_exception(ActiveRecord::RecordInvalid)
    end

    it "sets the lti_type to basic if no value is set" do
      name = "test"
      app = described_class.create!(name: name, canvas_uri: @canvas_uri)
      expect(app.basic?).to be true
    end

  end

end
