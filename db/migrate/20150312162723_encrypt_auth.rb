class EncryptAuth < ActiveRecord::Migration
  def change
    
    add_column :authentications, :encrypted_token, :string
    add_column :authentications, :encrypted_token_salt, :string
    add_column :authentications, :encrypted_token_iv, :string
    remove_column :authentications, :token

    add_column :authentications, :encrypted_secret, :string
    add_column :authentications, :encrypted_secret_salt, :string
    add_column :authentications, :encrypted_secret_iv, :string
    remove_column :authentications, :secret

    add_column :authentications, :encrypted_refresh_token, :string
    add_column :authentications, :encrypted_refresh_token_salt, :string
    add_column :authentications, :encrypted_refresh_token_iv, :string
    remove_column :authentications, :refresh_token
    
  end
end
