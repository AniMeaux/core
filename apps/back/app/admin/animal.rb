ActiveAdmin.register Animal do
  permit_params :name, :description, :category, :birthday, :gender, :species, :status,
    images_attributes: [:id, :picture, :public_id, :_destroy]

  index do
    selectable_column
    id_column
    column :category
    column :name
    column :birthday
    column :gender
    column :species
    column :status
    actions
  end

  filter :category
  filter :status
  filter :gender

  form do |f|
    f.inputs "Animal" do
      f.input :category
      f.input :name
      f.input :description, as: :text
      f.input :birthday, :as => :date_picker
      f.input :gender
      f.input :species
      f.input :status
      f.has_many :images do |a|
        unless a.object.new_record?
          a.input :_destroy, :as => :boolean, :required => false, :label => "Delete this picture"
        end
        a.input :picture, :as => :file, :hint => image_tag(
          a.object.picture_url(:active_admin)
        )
      end
    end
    f.actions
  end

end
