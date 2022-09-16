class CartSerializer < ActiveModel::Serializer
  attributes :total
  has_many :order_items
end