class RecipientAddress < Address
  has_many :orders, foreign_key: 'recipient_address_id'
end
