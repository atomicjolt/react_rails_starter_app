class CustomDomain
  def matches?(request)
    return false if request.subdomain.length <= 0 || request.subdomain == 'www'
    true
  end
end

Rails.application.routes.draw do

  root to: "home#index"

  devise_for :users, controllers: {
    sessions: "sessions",
    registrations: "registrations",
    omniauth_callbacks: "omniauth_callbacks"
  }

  as :user do
    get   '/auth/failure'         => 'sessions#new'
    get     'users/auth/:provider'  => 'users/omniauth_callbacks#passthru'
    get     'sign_in'               => 'sessions#new'
    post    'sign_in'               => 'sessions#create'
    get     'sign_up'               => 'devise/registrations#new'
    delete  'sign_out'              => 'sessions#destroy'
  end

  resources :users

  resources :admin, only: [:index]

  namespace :api do
    resources :accounts do
      resources :users
    end
    resources :jwts
  end

  mount MailPreview => 'mail_view' if Rails.env.development?

end
