require "spec_helper"

describe Authentication, type: :model do
  it { should belong_to :user }
  it "Requires the provider" do
    authentication = FactoryGirl.build(:authentication, provider: nil)
    expect(authentication.save).to eq(false)
  end
end
