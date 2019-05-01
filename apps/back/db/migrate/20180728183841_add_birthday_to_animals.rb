class AddBirthdayToAnimals < ActiveRecord::Migration[5.0]
  def change
    add_column :animals, :birthday, :datetime
  end
end
