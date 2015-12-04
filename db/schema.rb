# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151204161101) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string   "name"
    t.string   "domain"
    t.string   "lti_key"
    t.string   "lti_secret"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "canvas_uri",                  limit: 2048
    t.string   "code"
    t.string   "salt"
    t.string   "pass"
    t.string   "encrypted_canvas_token"
    t.string   "encrypted_canvas_token_salt"
    t.string   "encrypted_canvas_token_iv"
  end

  add_index "accounts", ["code"], name: "index_accounts_on_code", using: :btree
  add_index "accounts", ["domain"], name: "index_accounts_on_domain", unique: true, using: :btree

  create_table "authentications", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "provider"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.text     "json_response"
    t.string   "uid"
    t.string   "provider_avatar"
    t.string   "username"
    t.string   "provider_url",                 limit: 2048
    t.string   "encrypted_token"
    t.string   "encrypted_token_salt"
    t.string   "encrypted_token_iv"
    t.string   "encrypted_secret"
    t.string   "encrypted_secret_salt"
    t.string   "encrypted_secret_iv"
    t.string   "encrypted_refresh_token"
    t.string   "encrypted_refresh_token_salt"
    t.string   "encrypted_refresh_token_iv"
  end

  add_index "authentications", ["provider", "uid"], name: "index_authentications_on_provider_and_uid", using: :btree
  add_index "authentications", ["user_id"], name: "index_authentications_on_user_id", using: :btree

  create_table "permissions", force: :cascade do |t|
    t.integer  "role_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "permissions", ["role_id", "user_id"], name: "index_permissions_on_role_id_and_user_id", using: :btree

  create_table "profiles", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "location"
    t.decimal  "lat",           precision: 15, scale: 10
    t.decimal  "lng",           precision: 15, scale: 10
    t.text     "about"
    t.string   "city"
    t.integer  "state_id"
    t.integer  "country_id"
    t.integer  "language_id"
    t.integer  "profile_views"
    t.text     "policy"
    t.datetime "created_at",                              null: false
    t.datetime "updated_at",                              null: false
    t.string   "website"
    t.string   "blog"
    t.string   "twitter"
    t.string   "facebook"
    t.string   "linkedin"
  end

  create_table "roles", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "resource_id"
    t.string   "resource_type"
  end

  add_index "roles", ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id", using: :btree
  add_index "roles", ["name", "resource_type"], name: "index_roles_on_name_and_resource_type", using: :btree
  add_index "roles", ["name"], name: "index_roles_on_name", using: :btree

  create_table "user_roles", force: :cascade do |t|
    t.integer "user_id"
    t.integer "role_id"
  end

  add_index "user_roles", ["role_id"], name: "index_user_roles_on_role_id", using: :btree
  add_index "user_roles", ["user_id", "role_id"], name: "index_user_roles_on_user_id_and_role_id", using: :btree
  add_index "user_roles", ["user_id"], name: "index_user_roles_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "",        null: false
    t.string   "encrypted_password",     default: "",        null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,         null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "account_id"
    t.string   "username"
    t.string   "avatar"
    t.string   "time_zone",              default: "UTC"
    t.string   "password_salt"
    t.string   "lti_key"
    t.string   "lti_secret"
    t.string   "provider_avatar"
    t.string   "profile_privacy",        default: "private"
    t.string   "profile_privacy_token"
    t.string   "active_avatar",          default: "none"
    t.boolean  "admin",                  default: false
    t.boolean  "super_admin",            default: false
    t.string   "lti_user_id"
    t.string   "lms_user_id"
    t.string   "sis_user_id"
    t.string   "lti_provider"
  end

  add_index "users", ["account_id"], name: "index_users_on_account_id", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["lms_user_id"], name: "index_users_on_lms_user_id", using: :btree
  add_index "users", ["lti_user_id"], name: "index_users_on_lti_user_id", using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["sis_user_id"], name: "index_users_on_sis_user_id", using: :btree

end
