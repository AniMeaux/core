class AddPartners < ActiveRecord::Migration[5.2]
  def change
    create_table :partners do |t|
      t.string :name
      t.string :description
      t.string :website_url
      t.timestamps
    end
  end
end
