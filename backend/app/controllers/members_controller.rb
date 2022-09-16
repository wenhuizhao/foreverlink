class MembersController < ApplicationController
  before_action :authenticate_user!

  def show
    render json: { user: current_user }
  end

  def orders
    orders = Order.where(user_id: current_user.id).all
    render json: orders, each_serializer: OrderSerializer
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: { user: user }
  end

  private

  def user_params
    params.required(:user).permit(:first_name, :last_name)
  end
end
