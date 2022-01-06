class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :sender_address_id
      t.integer :recipient_address_id
      t.integer :product_id, null: false
      t.integer :status, null: false, default: 0
      t.decimal :discount
      t.decimal :total_amount

      t.timestamps
    end
  end
end
