FactoryBot.define do
  factory :address do
    user_name { FFaker::Internet.user_name }
    email { FFaker::Internet.email }
    company_name { FFaker::InternetSE.company_name_single_word }
    mobile_number { FFaker::PhoneNumberSG.mobile_number }
    street_address { FFaker::Address.street_address }
    city { FFaker::Address.city }
    region { FFaker::AddressDA.region }
    eir_code { FFaker::AddressDE.zip_code }
  end

  factory :sender_address, parent: :address, class: SenderAddress.name do
    type { SenderAddress.name }
  end

  factory :recipient_address, parent: :address, class: RecipientAddress.name do
    type { RecipientAddress.name }
  end

end
