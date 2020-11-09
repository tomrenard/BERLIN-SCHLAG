class Article < ApplicationRecord
  validates :title, presence: true
  # validates :text, presence: true
  has_one_attached :photo
  belongs_to :user, optional: true
end
