class User < ApplicationRecord
  VALID_EMAIL_REGEX = /\A([\w+\-].?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i.freeze
  validates :name, presence: true, length: { maximum: 35 }
  has_many :polls, dependent: :destroy
  has_secure_password
  has_secure_token :authentication_token
  validates :email, presence: true,
                    uniqueness: true,
                    length: { maximum: 50 },
                    format: { with: VALID_EMAIL_REGEX }
  validates :password, presence: true, length: { minimum: 6 }
  before_save :to_lowecase

  private

  def to_lowecase
    email.downcase!
  end
end
