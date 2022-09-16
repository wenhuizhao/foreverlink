class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.integer :user_id
      t.integer :product_id
      t.integer :order_id
      t.integer :quantity
      t.decimal :sub_total, precision: 15, scale: 2
      t.string :note

      t.timestamps
    end
  end
end
