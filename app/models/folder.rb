class Folder < ApplicationRecord
  belongs_to :user
  has_many :memos

  validates :folder, presence: true
end
