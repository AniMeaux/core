class Event < ApplicationRecord
  validates :name, length: { minimum: 2 }
  validates :description, length: { maximum: 1200 }
  validates :event_type, presence: true

  enum event_type: [
    :meeting,
    :adoption,
    :collecte
  ]

  enum status: [
    :active,
    :cancelled
  ]
end
