class OrderItemSerializer < ActiveModel::Serializer
  attributes :id, :sub_total, :quantity
  has_one :product
  has_one :forever_link
end
