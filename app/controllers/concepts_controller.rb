class ConceptsController < ApplicationController
  def show
    concept = Concept.find(params[:id])

    jbuilder do |json|
      json.extract! concept, :id, :name, :alias, :description
    end
  end

  def update
    jbuilder do |json|
      json.success true
    end
  end
end
