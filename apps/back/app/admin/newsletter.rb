ActiveAdmin.register Newsletter do
  permit_params :email

  index do
    selectable_column
    id_column
    column :email
    column :created_at
    actions
  end

  filter :email

  form do |f|
    f.inputs "Newsletter" do
      f.input :email
      f.input :created_at
    end
    f.actions
  end

end
