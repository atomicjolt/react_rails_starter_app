class AddAuthentications < ActiveRecord::Migration
  def change

    create_table "authentications", :force => true do |t|
      t.integer  "user_id"
      t.string   "token"
      t.string   "secret"
      t.string   "provider"
      t.datetime "created_at",                      :null => false
      t.datetime "updated_at",                      :null => false
      t.text     "json_response"
      t.string   "uid"
      t.string   "provider_avatar"
      t.string   "username"
      t.string   "provider_url",    :limit => 2048
      t.string   "refresh_token"
    end

    add_index "authentications", ["provider", "uid"], :name => "index_authentications_on_provider_and_uid"
    add_index "authentications", ["user_id"], :name => "index_authentications_on_user_id"

  end
end
