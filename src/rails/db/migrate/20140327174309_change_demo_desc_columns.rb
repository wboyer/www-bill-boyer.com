class ChangeDemoDescColumns < ActiveRecord::Migration
  def change
    rename_column :demos, :desc, :short_desc
    add_column :demos, :long_desc, :text
  end
end
