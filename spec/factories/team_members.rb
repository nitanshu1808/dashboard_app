FactoryBot.define do
  factory :team_member do
    first_name { FFaker::Name.first_name }
    last_name { FFaker::Name.last_name }
    email { FFaker::Internet.email }
    membership_type { "Regular" }
    association :vendor, factory: :vendor
  end
end
