class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.integer :event_type
      t.datetime :begin_at
      t.datetime :end_at
      t.string :name
      t.string :description
      t.integer :status, default: 0

      t.timestamps
    end
  end
end
