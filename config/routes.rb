Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  devise_scope :user do
    get 'sign_in', to: 'devise/sessions#new'
  end

  # root to: 'users/sessions#new'
  
  get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace 'vendor' do
    resources :dashboard, only: :index
  end

  namespace 'stakeholder' do
    resources :dashboard, only: :index
  end
end
