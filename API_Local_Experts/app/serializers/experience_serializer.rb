class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :quota, :category, :image, :description, :host_name, :location_id, :location_name, :events, :start_lat, :start_lon, :end_lat, :end_lon

  def location_name
    self.object.location.name
  end

  def events
    # byebug
    Event.all.where(experience_id: self.object.id)
  end

end
