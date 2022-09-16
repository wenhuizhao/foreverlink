class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :list_price
end