namespace :product_orders do
  # rake product_orders:dummy_data
  task :dummy_data => :environment do
    Vendor.limit(50).each{|vendor| FactoryBot.create_list(:product, 5, vendor: vendor)}
    Product.limit(50).each{|product| FactoryBot.create_list(:order, 5, product: product) }
  end
end
