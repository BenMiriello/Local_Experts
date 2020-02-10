class Save < ApplicationRecord

  belongs_to :event
  
  belongs_to :user

  belongs_to :trip

  def book
    # byebug
    if self.event.spots_left >= self.number_of_guests
      self.update(booked: true)
      return true
    end
    return false
  end

  def cancel
    # if the event hasn't happened yet or is still n days away (maybe have cancellation policy in experience model)
    self.update(booked: false)
  end

end

