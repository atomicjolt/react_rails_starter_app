class AddUserRolesTable < ActiveRecord::Migration
  def change
    create_table "user_roles", :force => true do |t|
      t.integer  "user_id"
      t.integer  "role_id"
    end
    add_index :user_roles, :user_id
    add_index :user_roles, :role_id
    add_index :user_roles, [:user_id, :role_id]
  end
end
