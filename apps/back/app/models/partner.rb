class Partner < ApplicationRecord
  has_many :partner_images, dependent: :destroy
  has_many :images, through: :partner_images, dependent: :destroy

  accepts_nested_attributes_for :images, allow_destroy: true
  accepts_nested_attributes_for :partner_images, allow_destroy: true

  validates :name, length: { minimum: 2 }
  validates :description, length: { maximum: 1200 }
end
