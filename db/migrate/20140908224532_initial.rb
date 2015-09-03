class Initial < ActiveRecord::Migration
  def change

    create_table "accounts", force: true do |t|
      t.string   "name"
      t.string   "domain"
      t.datetime "created_at"
      t.datetime "updated_at"
      t.string   "code"
    end

    add_index "accounts", ["code"], name: "index_accounts_on_code", using: :btree
    add_index "accounts", ["domain"], name: "index_accounts_on_domain", unique: true, using: :btree

    create_table "external_identifiers", force: true do |t|
      t.integer  "user_id"
      t.string   "identifier"
      t.string   "provider"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "external_identifiers", ["identifier", "provider"], name: "index_external_identifiers_on_identifier_and_provider", using: :btree
    add_index "external_identifiers", ["user_id"], name: "index_external_identifiers_on_user_id", using: :btree

    create_table "users", force: true do |t|
      t.string   "email",                  default: "", null: false
      t.string   "encrypted_password",     default: "", null: false
      t.string   "reset_password_token"
      t.datetime "reset_password_sent_at"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",          default: 0,  null: false
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
      t.integer  "role"
      t.integer  "account_id"
    end

    add_index "users", ["account_id"], name: "index_users_on_account_id", using: :btree
    add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
    add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree


  end
end