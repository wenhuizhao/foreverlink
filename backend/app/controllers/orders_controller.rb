class OrdersController < ApplicationController
  before_action :set_order, only: %i[ show update destroy ]
  before_action :authenticate_user!
  before_action -> { admin_or_owner_only(@order.user_id) } , only: %i[ show update destroy]

  # GET /orders
  def index
    @orders = Order.all

    render json: @orders
  end

  # GET /orders/1
  def show
    render json: @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      render json: @order, status: :created, location: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      render json: @order
    else
      render json: @order.errors, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
  end

  def create_order_with_product
    @order = Order.create(
      order_id: order_params[:order_id],
      user_id: current_user.id,
      status: :created,
    )
    @order.order_items.create(
      user_id: current_user.id,
      product_id: order_params[:product_id],
      quantity: order_params[:quantity],
    )
    @order.save!
    render json: OrderSerializer.new(@order).serializable_hash
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_order
      @order = Order.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def order_params
      params.require(:order)
        .permit(:user_id, :status, :total, :note, :product_id, :quantity, :order_id)
        .compact
    end
end
