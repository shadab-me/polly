class Vote < ApplicationRecord
  validates :user_id, presence: true
  validates :poll_id, presence: true
  validates :option_id, presence: true
  belongs_to :user
  belongs_to :poll
  belongs_to :option
end
