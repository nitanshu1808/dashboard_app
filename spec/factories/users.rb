FactoryBot.define do
  factory :user do
    first_name { FFaker::Name.first_name }
    last_name { FFaker::Name.last_name }
    email { FFaker::Internet.email }
    password { 'Sendoso@123' }
    status { 0 }
  end

  factory :vendor, parent: :user, class: Vendor.name do
    type { Vendor.name }
    after :create do |vendor|
      create_list :team_member, 15, vendor: vendor
    end
  end

  factory :stake_holder, parent: :user, class: StakeHolder.name do
    type { StakeHolder.name }
  end

end
