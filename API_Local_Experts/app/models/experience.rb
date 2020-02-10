class Experience < ApplicationRecord

    belongs_to :location

    belongs_to :category

    has_many :events, dependent: :destroy

    has_many :favorites, dependent: :destroy

end
