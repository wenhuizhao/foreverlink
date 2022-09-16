class AddDomainToProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :domain, :string
  end
end
