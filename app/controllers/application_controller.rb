class ApplicationController < ActionController::API
  def jbuilder &block
    render json: (Jbuilder.encode(&block))
  end
end
