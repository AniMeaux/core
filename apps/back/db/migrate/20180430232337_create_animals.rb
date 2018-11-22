class CreateAnimals < ActiveRecord::Migration[5.0]
  def change
    create_table :animals do |t|
      t.integer :category
      t.string :name
      t.integer :age
      t.string :description
      t.integer :gender
      t.string :species
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
