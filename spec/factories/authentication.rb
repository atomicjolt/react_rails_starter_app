FactoryGirl.define do

  factory :authentication do
    user
    provider { FactoryGirl.generate(:name) }
    token { FactoryGirl.generate(:name) }
    secret { FactoryGirl.generate(:password) }
    provider_url { FactoryGirl.generate(:uri) }

    factory :authentication_facebook do
      provider 'facebook'
      uid '12345'
      username 'myusername'
      provider_avatar 'http://graph.facebook.com/12345/picture?type=large'
    end

  end

end
