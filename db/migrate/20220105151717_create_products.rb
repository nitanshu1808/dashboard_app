class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, default: ''
      t.text :description, null: false, default: ''
      t.integer :vendor_id, null: false
      t.integer :status, null: false, default: 0
      t.decimal :price, default: 0
      t.timestamps
    end
  end
end
