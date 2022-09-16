class ProductsController < ApplicationController
  include ActiveStorage::SetCurrent
  before_action :set_product, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: %i[ create update destroy]
  before_action :admin_only, only: %i[ create update destroy ]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: ProductSerializer.new(@product).serializable_hash
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_params
      params.require(:product).permit(:name, :category_id, :price, :list_price,
        :photo, :description)
    end
end
