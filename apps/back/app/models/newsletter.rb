class Newsletter < ApplicationRecord
  validates :email, presence: true, uniqueness: true
end
