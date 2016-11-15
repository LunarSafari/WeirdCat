class CreateAspects < ActiveRecord::Migration[5.0]
  def change
    create_table :aspects do |t|
      t.string :name
      t.text :description
      t.integer :concept_id
      t.timestamps
    end
  end
end
