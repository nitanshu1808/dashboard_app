require 'rails_helper'

RSpec.describe Product, type: :model do
  it { should have_db_column(:name).of_type(:string) }
  it { should have_db_column(:description).of_type(:text) }
  it { should have_db_column(:vendor_id).of_type(:integer) }
  it { should have_db_column(:status).of_type(:integer) }
  it { should have_db_column(:price).of_type(:decimal) }
end
