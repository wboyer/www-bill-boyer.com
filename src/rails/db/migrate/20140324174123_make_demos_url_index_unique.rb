class MakeDemosUrlIndexUnique < ActiveRecord::Migration
  def change
    remove_index :demos, :url
    add_index :demos, :url, :unique => true
  end
end
