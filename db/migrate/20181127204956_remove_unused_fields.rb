class RemoveUnusedFields < ActiveRecord::Migration[5.1]
  def change
    remove_column :authentications, :json_response, :text
    remove_column :users, :time_zone, :string, default: "UTC"
  end
end
