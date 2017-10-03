class ChangeRrIntegerToBigint < ActiveRecord::Migration[5.0]
  def up
    change_column :authentications, :id, :bigint
    change_column :permissions, :id, :bigint
    change_column :roles, :id, :bigint
    change_column :users, :id, :bigint

    change_column :authentications, :user_id, :bigint
    change_column :permissions, :role_id, :bigint
    change_column :permissions, :user_id, :bigint
    change_column :users, :sign_in_count, :bigint
    change_column :users, :create_method, :bigint
  end

  def down
    change_column :authentications, :id, :integer
    change_column :permissions, :id, :integer
    change_column :roles, :id, :integer
    change_column :users, :id, :integer

    change_column :authentications, :user_id, :integer
    change_column :permissions, :role_id, :integer
    change_column :permissions, :user_id, :integer
    change_column :users, :sign_in_count, :integer
    change_column :users, :create_method, :integer
  end
end
