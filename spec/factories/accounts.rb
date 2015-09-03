FactoryGirl.define do

  factory :account do
    code { FactoryGirl.generate(:code) }
    name { FactoryGirl.generate(:name) }
    domain { FactoryGirl.generate(:domain) }
  end
end
