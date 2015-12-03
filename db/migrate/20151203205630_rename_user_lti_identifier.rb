class RenameUserLtiIdentifier < ActiveRecord::Migration
  def change
    rename_column :users, :lti_user_id, :lms_user_id
    rename_column :users, :lti_identifier, :lti_user_id
    remove_index :users, "lti_user_id"
    remove_index :users, "lms_user_id"
    add_index :users, :lti_user_id
    add_index :users, :lms_user_id
  end
end
