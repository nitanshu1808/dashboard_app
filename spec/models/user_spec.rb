require 'rails_helper'

RSpec.describe User, type: :model do

  context '#db attributes' do
    it { should have_db_column(:first_name).of_type(:string) }
    it { should have_db_column(:last_name).of_type(:string) }
    it { should have_db_column(:email).of_type(:string) }
    it { should have_db_column(:type).of_type(:string) }
    it { should have_db_column(:encrypted_password).of_type(:string) }
    it { should have_db_column(:status).of_type(:integer) }
    it { should have_db_column(:id).of_type(:integer) }
  end
  
end
