class CreateFavorites < ActiveRecord::Migration[6.0]
  def change
    create_table :favorites do |t|
      t.belongs_to :experience, index: true, null: false, foreign_key: true
      t.belongs_to :user, index: true, null: false, foreign_key: true

      t.timestamps
    end
  end
end
