class Trip < ApplicationRecord

  belongs_to :user

  has_many :saves
  has_many :saved_events, through: :saves, source: :event

end
