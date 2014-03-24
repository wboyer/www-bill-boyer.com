class RemoveIdFromDemos < ActiveRecord::Migration
  def change
    remove_column :demos, :id
  end
end
