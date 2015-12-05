class AddCoursesAndSections < ActiveRecord::Migration

  def change
    create_table "courses", force: :cascade do |t|
      t.integer "account_id"
      t.string  "lms_course_id"
      t.string  "name"
    end

    add_index "courses", ["account_id"], name: "index_courses_on_account_id", using: :btree
    add_index "courses", ["lms_course_id"], name: "index_courses_on_lms_course_id", using: :btree

    create_table "sections", force: :cascade do |t|
      t.integer  "course_id"
      t.string   "lms_section_id"
      t.string   "name"
      t.datetime "created_at",                     null: false
      t.datetime "updated_at",                     null: false
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

    add_column :users,   :avatar_url, :string,             limit: 2048
    add_column :users,   :sortable_name, :string
    add_column :users,   :initials, :string
  end
end
