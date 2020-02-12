class SaveSerializer < ActiveModel::Serializer
  attributes :id, :booked, :number_of_guests, :user_id, :event_id
end
