json.extract! @animal, :id, :name, :description, :age, :category, :gender, :species, :status
json.images do
  json.array! @animal.images do |image|
    json.extract! image, :id
    json.public_id image.picture.full_public_id
    json.format image.picture.format
  end
end