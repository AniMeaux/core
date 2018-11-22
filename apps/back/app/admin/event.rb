ActiveAdmin.register Event do
  permit_params :event_type, :begin_at, :end_at, :name, :description, :status

  index do
    selectable_column
    id_column
    column :event_type
    column :name
    column :begin_at
    column :end_at
    column :status
    actions
  end

  filter :event_type
  filter :begin_at
  filter :end_at
  filter :status

  form do |f|
    f.inputs "Event" do
      f.input :event_type
      f.input :name
      f.input :description, as: :string
      f.input :begin_at
      f.input :end_at
      f.input :status
    end
    f.actions
  end

end
