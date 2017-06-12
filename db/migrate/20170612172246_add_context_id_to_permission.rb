class AddContextIdToPermission < ActiveRecord::Migration[5.0]
  def change
    add_column :permissions, :context_id, :string
    add_index :permissions, :context_id
    add_index :permissions, [:role_id, :user_id, :context_id]
  end
end
