require 'rails_helper'

RSpec.describe Account, :type => :model do

  before do
    @account = FactoryGirl.create(:account)
  end

  it { should have_many(:users) }

  describe "clean_domain" do
    it "gets the host from the domain" do
      @account.domain = "www.example.com"
      @account.clean_domain
      expect(@account.domain).to eq("www.example.com")
    end
    it "gets the host from the domain when the domain has http" do
      @account.domain = "http://www.example.com"
      @account.clean_domain
      expect(@account.domain).to eq("www.example.com")
    end
    it "gets the host from the domain when the domain doesn't have a subdomain" do
      @account.domain = "example.com"
      @account.clean_domain
      expect(@account.domain).to eq("example.com")
    end
  end

  describe "main" do
    it "finds the default account" do
      account = FactoryGirl.create(:account, code: Rails.application.secrets.application_code)
      expect(Account.main).to eq(account)
    end
  end

end
