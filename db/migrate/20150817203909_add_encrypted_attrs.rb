class AddEncryptedAttrs < ActiveRecord::Migration

  def change

    add_column :accounts, :salt, :string
    add_column :accounts, :pass, :string

    add_column :accounts, :encrypted_canvas_token, :string
    add_column :accounts, :encrypted_canvas_token_salt, :string
    add_column :accounts, :encrypted_canvas_token_iv, :string

  end

end
