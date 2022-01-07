class Product < ApplicationRecord
  enum status: %i[in_stock out_of_stock trending]

  belongs_to :vendor, class_name: Vendor.name, foreign_key: 'vendor_id'
  has_many :orders
end
