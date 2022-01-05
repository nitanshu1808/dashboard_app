class Vendor < User
  has_many :products, foreign_key: 'vendor_id'
end
