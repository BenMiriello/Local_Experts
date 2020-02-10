class Event < ApplicationRecord

    belongs_to :experience

    has_many :saves, dependent: :destroy

    def saves
        Save.where(event_id: self.id)
    end

    def name
        self.experience.name
    end

    def description
        self.experience.description
    end

    def quota
        self.experience.quota
    end

    def spots_left
        @spots_left = self.experience.quota
        if self.saves.count >= 1
            self.saves.each do |save|
                @spots_left -= save.number_of_guests
            end
        end
        @spots_left
    end

    def image
        self.experience.image
    end

    def host_name
        self.experience.host_name
    end

end

