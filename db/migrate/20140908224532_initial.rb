class Initial < ActiveRecord::Migration
  def change

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

    create_table "courses", force: :cascade do |t|
      t.integer "account_id"
      t.string  "lms_course_id"
      t.string  "name"
    end

    add_index "courses", ["account_id"], name: "index_courses_on_account_id", using: :btree
    add_index "courses", ["lms_course_id"], name: "index_courses_on_lms_course_id", using: :btree

    create_table "permissions", force: :cascade do |t|
      t.integer  "role_id"
      t.integer  "user_id"
      t.datetime "created_at"
      t.datetime "updated_at"
    end

    add_index "permissions", ["role_id", "user_id"], name: "index_permissions_on_role_id_and_user_id", using: :btree

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

    create_table "sections", force: :cascade do |t|
      t.integer  "course_id"
      t.string   "lms_section_id"
      t.string   "name"
      t.datetime "created_at",     null: false
      t.datetime "updated_at",     null: false
    end

    add_index "sections", ["course_id"], name: "index_sections_on_course_id", using: :btree
    add_index "sections", ["lms_section_id"], name: "index_sections_on_lms_section_id", using: :btree

    create_table "user_courses", force: :cascade do |t|
      t.integer "user_id"
      t.integer "course_id"
      t.integer "role_id",    default: 2
      t.integer "section_id"
    end

    add_index "user_courses", ["course_id"], name: "index_user_courses_on_course_id", using: :btree
    add_index "user_courses", ["role_id"], name: "index_user_courses_on_role_id", using: :btree
    add_index "user_courses", ["section_id"], name: "index_user_courses_on_section_id", using: :btree
    add_index "user_courses", ["user_id"], name: "index_user_courses_on_user_id", using: :btree

    create_table "user_roles", force: :cascade do |t|
      t.integer "user_id"
      t.integer "role_id"
    end

    add_index "user_roles", ["role_id"], name: "index_user_roles_on_role_id", using: :btree
    add_index "user_roles", ["user_id", "role_id"], name: "index_user_roles_on_user_id_and_role_id", using: :btree
    add_index "user_roles", ["user_id"], name: "index_user_roles_on_user_id", using: :btree

    create_table "users", force: :cascade do |t|
      t.string   "email",                               default: "",        null: false
      t.string   "encrypted_password",                  default: "",        null: false
      t.string   "reset_password_token"
      t.datetime "reset_password_sent_at"
      t.datetime "remember_created_at"
      t.integer  "sign_in_count",                       default: 0,         null: false
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
      t.string   "time_zone",                           default: "UTC"
      t.string   "password_salt"
      t.string   "lti_key"
      t.string   "lti_secret"
      t.string   "provider_avatar"
      t.string   "active_avatar",                       default: "none"
      t.boolean  "admin",                               default: false
      t.boolean  "super_admin",                         default: false
      t.string   "lti_user_id"
      t.string   "lms_user_id"
      t.string   "sis_user_id"
      t.string   "lti_provider"
      t.string   "avatar_url",             limit: 2048
      t.string   "sortable_name"
      t.string   "initials"
    end

    add_index "users", ["account_id"], name: "index_users_on_account_id", using: :btree
    add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
    add_index "users", ["lms_user_id"], name: "index_users_on_lms_user_id", using: :btree
    add_index "users", ["lti_user_id"], name: "index_users_on_lti_user_id", using: :btree
    add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    add_index "users", ["sis_user_id"], name: "index_users_on_sis_user_id", using: :btree

  end
end
