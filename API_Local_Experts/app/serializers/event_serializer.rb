class EventSerializer < ActiveModel::Serializer
  attributes :id, :start_at, :end_at

  belongs_to :experience
end
