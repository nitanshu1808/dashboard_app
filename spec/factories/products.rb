FactoryBot.define do
  factory :product do
    association :vendor, factory: :vendor
    name { FFaker::Product.product_name }
    description { FFaker::Product.product }
    price { rand(10..200) }
    status { rand(0..2) }
  end
end
