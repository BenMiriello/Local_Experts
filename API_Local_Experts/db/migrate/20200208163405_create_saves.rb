class CreateSaves < ActiveRecord::Migration[6.0]
  def change
    create_table :saves do |t|
      t.boolean :booked, default: false
      t.integer :number_of_guests
      t.belongs_to :event, index: true, null: false, foreign_key: true
      t.belongs_to :user, index: true, null: false, foreign_key: true
      # t.integer :trip_id

      t.timestamps
    end
  end
end

