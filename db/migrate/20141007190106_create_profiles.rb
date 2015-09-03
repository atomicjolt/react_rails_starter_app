class CreateProfiles < ActiveRecord::Migration
  def change
    create_table "profiles", :force => true do |t|
      t.integer  "user_id"
      t.string   "location"
      t.decimal  "lat",           :precision => 15, :scale => 10
      t.decimal  "lng",           :precision => 15, :scale => 10
      t.text     "about"
      t.string   "city"
      t.integer  "state_id"
      t.integer  "country_id"
      t.integer  "language_id"
      t.integer  "profile_views"
      t.text     "policy"
      t.datetime "created_at",                                    :null => false
      t.datetime "updated_at",                                    :null => false
      t.string   "website"
      t.string   "blog"
      t.string   "twitter"
      t.string   "facebook"
      t.string   "linkedin"
    end
  end
end
