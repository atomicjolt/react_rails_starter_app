require 'rails_helper'

describe AuthToken do
  before do
    @user = FactoryGirl.create(:user)
  end

  it "issues a valid jwt for the user id" do
    token = AuthToken.issue_token({ user_id: @user.id })
    decoded = AuthToken.valid?(token)
    decoded_token = decoded[0]
    expect(decoded_token['user_id']).to eq @user.id
  end

end