require 'rails_helper'

class LtiMethodsTester
  attr_accessor :lti_key, :lti_secret
  def self.before_save(foo); end
  def self.before_create(foo); end
  def self.find_by(foo); end
  include Lti::Methods
end

describe Lti::Methods do
  before do
    @test = LtiMethodsTester.new
  end
  describe "#set_lti" do
    it "should set the lti_key" do
      @test.set_lti
      expect(@test.lti_key).to be_present
    end
    it "should set the lti_secret" do
      @test.set_lti
      expect(@test.lti_secret).to be_present
    end
  end
  describe "#random_key" do
    it "generates a random key" do
      key = 'foo'
      expect(@test.random_key).to be_present
    end
  end
end