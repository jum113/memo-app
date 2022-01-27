Rails.application.routes.draw do
  devise_for :users
  root 'folders#index'
  resources :folders, only: [:index, :create, :destroy] do
    resources :memos, only: [:index, :create, :destroy]
  end
end