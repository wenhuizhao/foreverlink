class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :domain, :price, :list_price, :photo_url
end