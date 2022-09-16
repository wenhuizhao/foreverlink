class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, :registerable,
         jwt_revocation_strategy: JwtDenylist
  has_many :forever_links
  has_many :orders

  def is_admin?
    ENV["ADMIN_IDS"].split(",").map(&:to_i).include?(id)
  end
end
