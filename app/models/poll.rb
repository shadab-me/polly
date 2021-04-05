class Poll < ApplicationRecord
    has_many:option
    belongs_to :user
end
