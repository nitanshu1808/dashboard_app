class SenderAddress < Address
  has_many :orders, foreign_key: 'sender_address_id'
end
