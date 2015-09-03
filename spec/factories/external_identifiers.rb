FactoryGirl.define do
  factory :external_identifier do
    identifier { FactoryGirl.generate(:name) }
    provider { FactoryGirl.generate(:uri) }
  end
end
