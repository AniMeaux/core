json.array! @events do |event|
  json.extract! event, :id, :name, :begin_at, :end_at, :description, :status, :url
end