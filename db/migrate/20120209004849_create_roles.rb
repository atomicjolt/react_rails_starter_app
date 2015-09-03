class CreateRoles < ActiveRecord::Migration
  def up
    
    create_table :roles, :force => true do |t|
      t.string   :name
      t.timestamps
    end

    create_table :permissions, :force => true do |t|
      t.references :role, :user
      t.timestamps
    end
    add_index :permissions, [:role_id, :user_id]
    
    create_table "user_accounts", :force => true do |t|
      t.integer  "user_id"
      t.integer  "account_id"
      t.string   "role"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "user_accounts", ["user_id", "account_id"], :name => "index_user_accounts_on_user_id_and_account_id"

  end

  def down
    drop_table :roles
    drop_table :permissions
    drop_table :user_accounts
  end
end