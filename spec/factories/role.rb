FactoryGirl.define do
  factory :role do
    name { FactoryGirl.generate(:name) }
  end
end
