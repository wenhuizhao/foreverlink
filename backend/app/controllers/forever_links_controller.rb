class ForeverLinksController < ApplicationController
  before_action :set_forever_link, only: %i[ show update destroy ]
  before_action :authenticate_user!
  before_action :admin_only, only: %i[ create update destroy ]

  # GET /forever_links
  # def index
  #   @forever_links = ForeverLink.all

  #   render json: @forever_links
  # end

  # GET /forever_links/1
  def show
    render json: @forever_link
  end

  # POST /forever_links
  def create
    @forever_link = ForeverLink.new(forever_link_params)

    if @forever_link.save
      render json: @forever_link, status: :created, location: @forever_link
    else
      render json: @forever_link.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /forever_links/1
  def update
    if @forever_link.update(forever_link_params)
      render json: @forever_link
    else
      render json: @forever_link.errors, status: :unprocessable_entity
    end
  end

  # DELETE /forever_links/1
  def destroy
    @forever_link.destroy
  end

  def check_subdomain
    link = ForeverLink.where(
      domain: forever_link_params[:domain],
      subdomain: forever_link_params[:subdomain]
    ).first
    render json: { subdomain: link&.subdomain }
  end

  def claim_subdomain
    order_item = OrderItem.find(forever_link_params[:order_item_id])
    if order_item.nil?
      render json: { error: 'invalid order item' }, status: 422
      return
    end
    link = ForeverLink.where(
      domain: order_item.product.domain,
      subdomain: forever_link_params[:subdomain]
    ).first
    if link
      render json: { error: 'subdomain is already used by someone else'}, status: 422
      return
    end
    unless forever_link_params[:subdomain] =~ /^[A-Za-z0-9_@\.#&+-]*$/
      render json: { error: 'invalid subdomain' }, status: 422
    end

    forever_link = ForeverLink.create(
      order_item_id: forever_link_params[:order_item_id],
      subdomain: forever_link_params[:subdomain],
      domain: order_item.product.domain,
      user_id: current_user.id,
      status: :created
    )

    render json: ForeverLinkSerializer.new(forever_link).serializable_hash
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_forever_link
      @forever_link = ForeverLink.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def forever_link_params
      params.require(:forever_link).permit(:order_id, :subdomain, :domain, :user_id,
        :status, :order_item_id)
    end
end
