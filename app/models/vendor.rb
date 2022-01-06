class Vendor < User
  has_many :products, foreign_key: 'vendor_id'
  has_many :team_members, foreign_key: 'vendor_id'
end
