class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :user_name, null: false, default: ""
      t.string :email, null: false, default: ""
      t.string :company_name, null: false, default: ""
      t.string :mobile_number, null: false, default: ""
      t.string :type
      t.string :street_address, null: false, default: ""
      t.string :city
      t.string :region
      t.string :eir_code
      t.string :country, null: false, default: "Ireland"
      t.timestamps
    end
  end
end
