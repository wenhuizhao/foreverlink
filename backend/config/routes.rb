Rails.application.routes.draw do
  resources :feedbacks, only: %i[ index show create delete ]
  resources :forever_links
  resources :carts
  resources :order_items
  resources :orders
  resources :products
  resources :categories
  devise_for :users,
             controllers: {
                 sessions: 'users/sessions',
                 registrations: 'users/registrations'
             },
             defaults: { format: :json }
  get '/members/data', to: 'members#show'  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/members/orders', to: 'members#orders'
  post '/member-data/:id', to: 'members#update'
  post '/feedbacks/email_list', to: 'feedbacks#email_list'
  post 'forever_links/check_subdomain', to: 'forever_links#check_subdomain'
  post 'forever_links/claim_subdomain', to: 'forever_links#claim_subdomain'
  post '/orders/create_order_with_product', to: 'orders#create_order_with_product'
  post '/paypal/create_order', to: 'paypal#create_order'
  post '/paypal/capture_order', to: 'paypal#capture_order'
  post '/paypal/order_success', to: 'paypal#order_success'

  # Defines the root path route ("/")
  # root "articles#index"
end
