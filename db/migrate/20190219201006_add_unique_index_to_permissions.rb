class AddUniqueIndexToPermissions < ActiveRecord::Migration[5.1]
  def up
    remove_index :permissions, [:role_id, :user_id]
    remove_index :permissions, [:role_id, :user_id, :context_id]
    add_index :permissions, [:role_id, :user_id], unique: true, where: "(context_id IS NULL)"
    add_index :permissions, [:role_id, :user_id, :context_id], unique: true
  end

  def down
    remove_index :permissions, [:role_id, :user_id, :context_id]
    remove_index :permissions, [:role_id, :user_id]
    add_index :permissions, [:role_id, :user_id, :context_id]
    add_index :permissions, [:role_id, :user_id]
  end
end
