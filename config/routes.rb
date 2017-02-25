Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'directories#view'
  resources :directories, only: %i(index create update destroy) do
    get :view
  end
  resource :items
end
