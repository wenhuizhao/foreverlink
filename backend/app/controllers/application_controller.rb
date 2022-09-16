class ApplicationController < ActionController::API
  include ActionController::Helpers
  respond_to :json
  helper_method :admin_only
  before_action do
    ActiveStorage::Current.host = request.base_url
  end

  def admin_only
    current_user && current_user.is_admin?
  end

  def admin_or_owner_only(user_id)
    admin_only || current_user.id == user_id
  end

  def dollars_to_cents(dollars)
    (100 * dollars.to_r).to_i
  end
end
