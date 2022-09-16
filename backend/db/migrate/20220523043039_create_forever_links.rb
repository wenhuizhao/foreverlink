class CreateForeverLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :forever_links do |t|
      t.references :order_item, null: false, foreign_key: true
      t.string :subdomain
      t.string :domain
      t.references :user, null: false, foreign_key: true
      t.integer :status

      t.timestamps
    end
    add_index :forever_links, [:subdomain, :domain], unique: true
  end
end
