class ChangeDemoSrcColumnName < ActiveRecord::Migration
  def change
    rename_column :demos, :src, :script
  end
end
