class CreateConcepts < ActiveRecord::Migration[5.0]
  def change
    create_table :concepts do |t|
      t.string :name
      t.string :alias
      t.text :description

      t.timestamps
    end
  end
end
