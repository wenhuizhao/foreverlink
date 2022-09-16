class OrderSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :total
  has_many :order_items
end
