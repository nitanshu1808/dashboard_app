Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  devise_scope :user do
    root to: "users/sessions#new"
  end

  get 'hello_world', to: 'hello_world#index'

  namespace 'vendor' do
    resources :dashboard, only: :index
    
  end

  resources :vendor do
    resources :profile, only: :index
  end

  namespace 'stakeholder' do
    resources :dashboard, only: :index
  end
end
