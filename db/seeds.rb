FactoryBot.create(:vendor, email: 'vendor@sendoso.com', password: 'Sendoso@123')
FactoryBot.create(:stake_holder, email: 'stake_holder@sendoso.com')

data = [
  { name: 'Fairytale Brownies', orders: %w[68 36 8068 632] }.with_indifferent_access,
  { name: 'In Good Taste', orders:  %w[13 8 4991 742] }.with_indifferent_access,
  { name: 'Olive & Cocoa', orders:  %w[279 48 4909 265] }.with_indifferent_access,
  { name: 'The Cravory', orders: %w[59 31 4229 762] }.with_indifferent_access,
  { name: "Lula's Garden", orders: %w[1 17 3993 501] }.with_indifferent_access,
  { name: 'The Sip', orders: %w[3 73 3526 826] }.with_indifferent_access,
  { name: 'Cravory Custom', orders: %w[1 0 3967 0] }.with_indifferent_access,
  { name: 'Teak & Twine', orders: %w[2 211 3246 321] }.with_indifferent_access,
  { name: 'Cocktail Courier', orders: %w[4 31 2807 451] }.with_indifferent_access,
  { name: 'ReserveBar', orders: %w[109 58 2062 902] }.with_indifferent_access,
  { name: 'White Unicorn Pinatagram', orders: %w[0 0 2453 348] }.with_indifferent_access,
  { name: 'Pinatagram', orders:   %w[1 25 2384 171] }.with_indifferent_access,
  { name: 'Pinatagram', orders:   %w[1 8 2003 0] }.with_indifferent_access,
  { name: 'Letterbox Hampers', orders:  %w[848 464 514 398] }.with_indifferent_access,
  { name: "Veronica's Treats", orders:  %w[1 4 1920 129] }.with_indifferent_access,
  { name: 'Patient pop Custom', orders:   %w[0 4 1964 53] }.with_indifferent_access,
  { name: 'Social Stories Club', orders:  %w[0 12 1444 554] }.with_indifferent_access,
  { name: 'Baked By Melissa', orders:   %w[0 5 1721 81] }.with_indifferent_access,
  { name: 'Bonjour Bakehouse', orders:  %w[18 12 1463 267] }.with_indifferent_access,
  { name: 'Packed With Purpose', orders: %w[ß6 34 1440 237] }.with_indifferent_access
]

data.each do |info|
  vendor = FactoryBot.create(:vendor, first_name: info['name'], last_name: '')
  product = FactoryBot.create(:product, vendor: vendor)
  info['orders'].each_with_index do |total_count, index|
    orders = FactoryBot.create_list(:order, total_count.to_i, status: index, product: product)

    orders.each do |order|
      puts "Created Order #{order.id} with status #{order.status} for Product #{order.product.id} Vendor #{order.product.vendor.full_name}"
    end
  end
end
