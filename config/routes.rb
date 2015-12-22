class CustomDomain
  def matches?(request)
    return false if request.subdomain.length <= 0 || request.subdomain == 'www'
    true
  end
end

Rails.application.routes.draw do

  root to: "home#index"

  get 'iframe_cookies_fix_redirect' => 'lti_launches#iframe_cookies_fix_redirect'
  get 'relaunch_lti_tool' => 'lti_launches#relaunch_lti_tool'

  resources :lti_launches do
    collection do
      post :index
      get :index
    end
  end

  resources :lti_installs do
    collection do
      get :xml
    end
  end
  
  devise_for :users, controllers: {
    sessions: "sessions",
    registrations: "registrations",
    omniauth_callbacks: "omniauth_callbacks"
  }
  
  as :user do
    get     '/auth/failure'         => 'sessions#new'
    get     'auth/:provider'        => 'omniauth_callbacks#passthru'
    get     'sign_in'               => 'sessions#new'
    post    'sign_in'               => 'sessions#create'
    get     'sign_up'               => 'devise/registrations#new'
    delete  'sign_out'              => 'sessions#destroy'
  end

  resources :users
  resources :canvas_authentications
  
  resources :admin, only: [:index]

  namespace :api do
    resources :accounts do
      resources :users
    end
    resources :sessions
    resources :courses, only: [] do
      resources :students, only: [:index]
      resources :sections, only: [] do
        resources :students, only: [:index]
      end
    end
  end

  mount MailPreview => 'mail_view' if Rails.env.development?

  get 'api/canvas' => 'api/canvas_proxy#proxy'

end
