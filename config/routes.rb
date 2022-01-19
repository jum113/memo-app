Rails.application.routes.draw do
  devise_for :users
  root to: 'memos#index'
  resources :memos, only: [:index, :create]
end