class Order < ApplicationRecord
  belongs_to :product
  belongs_to :sender_address, optional: true, class_name: SenderAddress.name, foreign_key: 'sender_address_id'
  belongs_to :recipient_address, optional: true, class_name: RecipientAddress.name, foreign_key: 'recipient_address_id'

  enum status: %i[processed delivered returned refunded]

  def vendor_name
    self.product&.vendor.full_name
  end
end
