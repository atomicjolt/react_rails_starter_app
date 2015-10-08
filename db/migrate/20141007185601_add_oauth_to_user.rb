class AddOauthToUser < ActiveRecord::Migration
  def change
    add_column :users, :username, :string
    add_column :users, :avatar, :string
    add_column :users, :time_zone, :string,              :default => "UTC"
    add_column :users, :password_salt, :string
    add_column :users, :lti_key, :string
    add_column :users, :lti_secret, :string
    add_column :users, :provider_avatar, :string
    add_column :users, :profile_privacy, :string,        :default => "private"
    add_column :users, :profile_privacy_token, :string
    add_column :users, :active_avatar, :string,          :default => "none"
  end
end
