Rails.application.routes.draw do
  scope format: false do
    resources :concepts do
      resources :aspects
    end
  end
end
