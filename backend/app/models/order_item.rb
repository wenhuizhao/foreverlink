class OrderItem < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :order, optional: true
  belongs_to :product
  belongs_to :cart, optional: true
  has_one :forever_link
  before_save :update_sub_total

  def update_sub_total
    self.sub_total = BigDecimal(product.price) * quantity if product
  end
end
