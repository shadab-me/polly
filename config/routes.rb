Rails.application.routes.draw do
  resources :options
  resources :polls
  resources :users, only: %i[create index]
  resources :sessions, only: :create
   # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "home#index"
  get '*path', to: 'home#index', via: :all
end
