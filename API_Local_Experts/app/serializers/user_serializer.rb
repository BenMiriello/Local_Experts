class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :saves, :cart

  has_many :saves

  def cart
    self.object.saves.select { |save| save.booked == false }
  end

end

