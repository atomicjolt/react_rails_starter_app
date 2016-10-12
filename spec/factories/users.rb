FactoryGirl.define do

  factory :user do
    name { FactoryGirl.generate(:name) }
    email { FactoryGirl.generate(:email) }
    password { FactoryGirl.generate(:password) }
    after(:build) { |user| user.confirm }

    factory :user_facebook do
      active_avatar 'facebook'
      provider_avatar 'http://graph.facebook.com/12345/picture?type=large'
      after(:build) { |user| FakeWeb.register_uri(:get, user.provider_avatar, body: File.join(Rails.root, 'spec', 'fixtures', 'avatar.jpg')) }
    end

    factory :user_with_avatar do
      avatar { File.open File.join(Rails.root, 'spec', 'fixtures', 'avatar.jpg') }
    end
  end

end
