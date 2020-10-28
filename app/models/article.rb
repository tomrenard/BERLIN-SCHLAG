class Article < ApplicationRecord
  validates :title, presence: true
  # validates :text, presence: true
  has_many_attached :images
end
