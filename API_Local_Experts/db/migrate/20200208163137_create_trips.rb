class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :name
      t.belongs_to :user, index: true, null: false, foreign_key: true

      t.timestamps
    end
  end
end

