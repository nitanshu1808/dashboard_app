FactoryBot.define do
  factory :team_member do
    first_name { FFaker::Name.first_name }
    last_name { FFaker::Name.last_name }
    email_address { FFaker::Internet.email }
    membership_type { "Regular" }
  end
end
