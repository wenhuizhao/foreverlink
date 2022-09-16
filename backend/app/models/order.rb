class Order < ApplicationRecord
  belongs_to :user, optional: true
  has_many :order_items
  before_save :update_total

  enum :status, { created: 0, pending: 1, paid: 2, canceld: 3 }

  def update_total
    self.total = order_items.map(&:sub_total).sum
  end
end
