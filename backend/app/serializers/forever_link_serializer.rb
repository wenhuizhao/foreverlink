class ForeverLinkSerializer < ActiveModel::Serializer
  attributes :id, :subdomain, :domain, :status, :url
end
