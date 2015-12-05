FactoryGirl.define do

  factory :course do
    name { FactoryGirl.generate(:name) }
    account
    after(:build) { |course| course.users << FactoryGirl.create(:user, account_id: course.account_id) }
  end

end
