FactoryGirl.define do  
    
  factory :profile do
    user
    location 'Logan, UT'
    about { FactoryGirl.generate(:description) }
    city 'Logan'
    state
    country
    language
  end

end