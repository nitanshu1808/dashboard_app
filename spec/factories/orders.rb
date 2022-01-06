FactoryBot.define do
  factory :order do
    association :product
    association :sender_address, factory: :sender_address
    association :recipient_address, factory: :recipient_address
    discount { rand(0..20) }
    total_amount { rand(100..2000) }
    status { rand(0..3) }
  end
end
