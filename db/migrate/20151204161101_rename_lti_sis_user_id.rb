class RenameLtiSisUserId < ActiveRecord::Migration
  def change
    rename_column :users, :lti_sis_user_id, :sis_user_id
  end
end
