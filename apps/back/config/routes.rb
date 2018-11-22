Rails.application.routes.draw do
  resources :animal_images
  resources :images
  match '/',
    :to => redirect{|params, request| "https://www.animeaux.org/" },
    :via => :all
  resources :newsletters
  resources :events
  resources :animals
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  resources :users
  post 'user_token' => 'user_token#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
