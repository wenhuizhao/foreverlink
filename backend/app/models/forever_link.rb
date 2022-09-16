class ForeverLink < ApplicationRecord
  belongs_to :order_item
  belongs_to :user
  validates :subdomain, uniqueness: { scope: :domain }

  enum :status, { created: 0, pending: 1, locked: 2, minted: 3 }

  def url
    "#{subdomain}.#{domain}"
  end
end
