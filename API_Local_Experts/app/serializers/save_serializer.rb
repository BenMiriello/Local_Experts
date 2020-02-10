class SaveSerializer < ActiveModel::Serializer
  attributes :id, :booked, :number_of_guests, :event 
end
