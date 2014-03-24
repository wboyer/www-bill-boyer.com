class AddDemosUrlIndex < ActiveRecord::Migration
  def change
    add_index :demos, :url
  end
end
