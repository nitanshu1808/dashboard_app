namespace :product_orders do
  # rake product_orders:dummy_data
  task :dummy_data => :environment do
    FactoryBot.create_list(:order, 100)
    Vendor.all.each { |vendor| FactoryBot.create_list(:product, rand(1..5), vendor: vendor) }
    Product.all.each { |product| FactoryBot.create_list(:order, rand(0..5), product: product) }
  end
end
