class CreateAnimalImages < ActiveRecord::Migration[5.0]
  def change
    create_table :animal_images do |t|
      t.references :animal, foreign_key: true
      t.references :image, foreign_key: true
    end
  end
end
