class AspectsController < ApplicationController
  def update
    aspect = Aspect.find(params[:id])
    aspect.update(aspect_params)

    jbuilder do |json|
      json.success true
    end
  end

  private
    def aspect_params
      params.permit(:name, :description)
    end
end
