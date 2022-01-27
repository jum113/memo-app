class Folder < ApplicationRecord
  belongs_to :user
  has_many :memos, dependent: :destroy

  validates :folder_name, presence: true
end
