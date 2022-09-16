class Product < ApplicationRecord
  belongs_to :category
  has_one_attached :photo

  def photo_url
    # Rails.application.routes.url_helpers.rails_representation_url(
    #   photo.variant(resize_to_limit: [200, 200]).processed, only_path: true
    # )
    photo.url
    # Rails.application.routes.url_helpers.rails_representation_url(
    #   photo, only_path: true
    # )

  end
end
