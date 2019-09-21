ActiveAdmin.register Partner do
  permit_params :name, :website_url, :description,
    images_attributes: [:id, :picture, :public_id, :_destroy]

  index do
    selectable_column
    id_column
    column :name
    column :website_url
    actions
  end

  form do |f|
    f.inputs "Partner" do
      f.input :name
      f.input :description, as: :text
      f.input :website_url
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
