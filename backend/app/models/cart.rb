class Cart < ApplicationRecord
  has_many :order_items

  def add_item(item)
    
  end

end
