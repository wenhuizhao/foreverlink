class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :user_id
      t.integer :status
      t.decimal :total, precision: 15, scale: 2
      t.string :note

      t.timestamps
    end
  end
end
