class RemoveUserAccounts < ActiveRecord::Migration
  def change
    drop_table :user_accounts
  end
end
