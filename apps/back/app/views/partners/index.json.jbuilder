json.array! @partners do |partner|
  json.extract! partner, :id, :name, :description, :website_url
  json.images do
    json.array! partner.images do |image|
      json.extract! image, :id
      json.public_id image.picture.full_public_id
      json.format image.picture.format
    end
  end
end
