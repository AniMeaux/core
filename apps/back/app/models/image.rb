class Image < ApplicationRecord
  mount_uploader :picture, PictureUploader
end
