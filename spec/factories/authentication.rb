FactoryBot.define do
  factory :authentication do
    user
    provider { FactoryBot.generate(:name) }
    token { FactoryBot.generate(:name) }
    secret { FactoryBot.generate(:password) }
    provider_url { FactoryBot.generate(:uri) }

    factory :authentication_facebook do
      provider "facebook"
      uid "12345"
      username "myusername"
      provider_avatar "http://graph.facebook.com/12345/picture?type=large"
    end
  end
end
