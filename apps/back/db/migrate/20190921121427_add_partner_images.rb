class AddPartnerImages < ActiveRecord::Migration[5.2]
  def change
    create_table :partner_images do |t|
      t.references :partner, foreign_key: true
      t.references :image, foreign_key: true
    end
  end
end
