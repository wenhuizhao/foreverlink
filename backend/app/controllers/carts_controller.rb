class CartsController < ApplicationController
  before_action :set_cart, only: %i[ index show update destroy ]

  # # GET /carts, show cart from session_id
  def index
    render json: CartSerializer.new(@cart).serializable_hash
  end

  # GET /carts/1
  def show
    render json: CartSerializer.new(@cart).serializable_hash
  end

  # POST /carts
  def create
    @cart = Cart.new(cart_params)

    if @cart.save
      render json: @cart, status: :created, location: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /carts/1
  def update
    if @cart.update(cart_params)
      render json: @cart
    else
      render json: @cart.errors, status: :unprocessable_entity
    end
  end

  # DELETE /carts/1
  def destroy
    @cart.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
        @cart = Cart.find(session[:cart_id])
    rescue ActiveRecord::RecordNotFound
        @cart = Cart.create
        session[:cart_id] = @cart.id
    end

    # Only allow a list of trusted parameters through.
    def cart_params
      params.require(:cart).permit(:total)
    end
end
