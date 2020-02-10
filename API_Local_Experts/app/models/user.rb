class User < ApplicationRecord
    has_secure_password

    has_many :favorites, dependent: :destroy
    has_many :favorited_experiences, through: :favorites, source: :experience

    # has_many :saves, dependent: :destroy
    # has_many :saved_experiences, through: :saves, source: :experience

    has_many :trips, dependent: :destroy

    def saves
        Save.where(user_id: self.id)
    end

    def saved_events
        self.saves.map { |save| save.event }
    end

    def saved_experiences
        self.saved_events.map { |event| event.experience }
    end

    def booked_saves
        self.saves.where(booked: true)
    end

    def booked_events
        self.booked_saves.map { |save| save.event }
    end

    def booked_experiences
        self.booked_events.map { |event| event.experience }
    end

    def unbooked_saves
        self.saves.where(booked: false)
    end

    def unbooked_events
        self.unbooked_saves.map { |save| save.event }
    end

    def unbooked_experiences
        self.unbooked_events.map { |event| event.experience }
    end

    # def visited_cities
    #     # return booked events that have already happened
    # end

    # def past_trips
    #     # trips where each event's end time is in the past
    # end

    # def cart
    #     # byebug
    #     self.saves.select { |save| save.booked == false }
    # end
    
end

