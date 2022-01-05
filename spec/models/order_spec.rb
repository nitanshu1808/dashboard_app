require 'rails_helper'

RSpec.describe Order, type: :model do
  it { should have_db_column(:sender_address_id).of_type(:integer) }
  it { should have_db_column(:recipient_address_id).of_type(:integer) }
  it { should have_db_column(:product_id).of_type(:integer) }
  it { should have_db_column(:status).of_type(:integer) }
  it { should have_db_column(:discount).of_type(:decimal) }
  it { should have_db_column(:total_amount).of_type(:decimal) }
end
