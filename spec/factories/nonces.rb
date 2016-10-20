FactoryGirl.define do
  factory :nonce, class: Nonce do
    sequence(:nonce) { |n| "nonce-#{n}" }
  end
end
