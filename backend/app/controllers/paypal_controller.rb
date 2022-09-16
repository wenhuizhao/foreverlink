class PaypalController < ApplicationController
  before_action :paypal_init, :except => [:index]

  def index
  end

  def create_order
  amount = paypal_params[:amount]
  request = PayPalCheckoutSdk::Orders::OrdersCreateRequest::new
  request.request_body({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: amount,
        }
      }
    ]
  })
  begin
    response = @client.execute(request)

    order = Order.create(
      order_id: response.result.id,
      user_id: current_user&.id,
      status: :created,
    )
    order.order_items.create(
      user_id: current_user&.id,
      product_id: paypal_params[:product_id],
      quantity: paypal_params[:quantity],
    )

    if order.save!
      return render json: { order_id: response.result.id }, status: :ok
    end
  rescue PayPalHttp::HttpError => ioe
    # HANDLE THE ERROR
    puts ioe.message
  end
  end

  def capture_order
    request = PayPalCheckoutSdk::Orders::OrdersCaptureRequest::new paypal_params[:order_id]
    begin
      response = @client.execute(request)
      order = Order.find_by(order_id: paypal_params[:order_id])
      order.status = :paid if response.result.status == 'COMPLETED'
      if order.save
        return render json: { status: response.result.status }, status: :ok
      end
    rescue PayPalHttp::HttpError => ioe
      # HANDLE THE ERROR
      puts ioe.message
    end    
  end

  def order_success
    order = Order.find_by(order_id: paypal_params[:order_id])
    order.status = :paid if paypal_params[:order_status] == 'COMPLETED'
    if order.save!
      return render json: {}, status: :ok
    else
      return render json: {}, status: 500
    end
  end

 private
  def paypal_init
    client_id = ENV['PAYPAL_CLIENT_ID']
    client_secret = ENV['PAYPAL_CLIENT_SECRET']
    environment = PayPal::SandboxEnvironment.new(client_id, client_secret)
    @client = PayPal::PayPalHttpClient.new(environment)
  end

  def paypal_params
    params.require(:paypal).permit(:product_id, :quantity, :amount, :order_id, :order_status)
  end
end