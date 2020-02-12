class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :saves, :cart, :favorites, :favorite_experiences, :my_experiences

  has_many :saves

  def cart
    self.object.saves.select { |save| save.booked == false }
  end

  def favorite_experiences
    indeces = self.object.favorites.pluck(:experience_id).uniq
    @favorites = []
    indeces.each do |i|
      @favorites << Experience.find(i)
    end
    @favorites
  end

  def my_experiences
    # byebug
    my_save_ids = (self.object.saves.select { |save| save.booked == true }).pluck(:event_id) # && save.event.start_at.day >= DateTime.now.day
    @events_and_experiences = []
    my_save_ids.each do |i|
      @events_and_experiences << {event: Event.find(i), experience: Experience.find(Event.find(i).experience_id)}
    end
    # @my_experience_ids = []

    @events_and_experiences
  end

  # def past_experiences

  # end

end

