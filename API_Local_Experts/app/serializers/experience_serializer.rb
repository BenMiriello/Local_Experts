class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :name, :quota, :category, :image, :description, :host_name, :location_id, :start_lat, :start_lon, :end_lat, :end_lon
end
