require 'rails_helper'

RSpec.describe Address, type: :model do
  context '#db attributes' do
    it { should have_db_column(:user_name).of_type(:string) }
    it { should have_db_column(:email).of_type(:string) }
    it { should have_db_column(:company_name).of_type(:string) }
    it { should have_db_column(:mobile_number).of_type(:string) }
    it { should have_db_column(:street_address).of_type(:string) }
    it { should have_db_column(:city).of_type(:string) }
    it { should have_db_column(:region).of_type(:string) }
    it { should have_db_column(:eir_code).of_type(:string) }
  end
end
