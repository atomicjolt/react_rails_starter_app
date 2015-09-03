class CreateUserAccounts < ActiveRecord::Migration
  def change
    create_table "user_accounts", :force => true do |t|
      t.integer  "user_id"
      t.integer  "account_id"
      t.string   "role"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "user_accounts", ["user_id", "account_id"], :name => "index_user_accounts_on_user_id_and_account_id"

  end
end
