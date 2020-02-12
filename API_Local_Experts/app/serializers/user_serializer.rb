class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :saves, :cart, :favorites, :favorite_experiences

  has_many :saves

  def cart
    self.object.saves.select { |save| save.booked == false }
  end

  def favorite_experiences
    # byebug
    indeces = self.object.favorites.pluck(:experience_id).uniq
    favorites = []
    indeces.each do |i|
      favorites << Experience.find(i)
    end
    favorites
  end

end

