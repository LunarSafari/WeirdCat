class ConceptsController < ApplicationController
  def show
    concept = Concept.find(params[:id])

    jbuilder do |json|
      json.extract! concept, :id, :name, :alias, :description
      json.aspects concept.aspects, :id, :name, :description
    end
  end

  def update
    concept = Concept.find(params[:id])
    concept.update(concept_params)
    jbuilder do |json|
      json.success true
    end
  end

  private
    def concept_params
      params.permit(:name, :alias, :description)
    end
end
