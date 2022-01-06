class Order < ApplicationRecord
  belongs_to :product
  belongs_to :sender_address, optional: true, class_name: SenderAddress.name, foreign_key: 'sender_address_id'
  belongs_to :recipient_address, optional: true, class_name: RecipientAddress.name, foreign_key: 'recipient_address_id'
end
