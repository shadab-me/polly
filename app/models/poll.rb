class Poll < ApplicationRecord
  has_many :options, dependent: :destroy
  has_many :votes, dependent: :destroy
  belongs_to :user

  # validation
  validates :value, presence: true
  validates :user_id, presence: true
  accepts_nested_attributes_for :options, allow_destroy: true
end
