class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :category_id
      t.decimal :price, precision: 15, scale: 2
      t.decimal :list_price, precision: 15, scale: 2

      t.timestamps
    end
  end
end
