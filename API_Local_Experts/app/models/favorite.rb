class Favorite < ApplicationRecord
  
  belongs_to :experience
  
  belongs_to :user

end
