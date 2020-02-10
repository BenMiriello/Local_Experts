class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
      t.string :name
      t.string :description
      t.integer :quota
      t.string :image
      t.string :host_name
      t.float :start_lat, precision: 6
      t.float :start_lon, precision: 6
      t.float :end_lat, precision: 6
      t.float :end_lon, precision: 6
      # t.point :lat
      # t.point :lon

      t.belongs_to :category, index: true, null: false, foreign_key: true
      t.belongs_to :location, index: true, null: false, foreign_key: true

      t.timestamps
    end
  end
end

