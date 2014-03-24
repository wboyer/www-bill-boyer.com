class CreateDemos < ActiveRecord::Migration
  def change
    create_table :demos do |t|
      t.string :url
      t.string :title
      t.text :desc
      t.string :img
      t.string :src

      t.timestamps
    end
  end
end
