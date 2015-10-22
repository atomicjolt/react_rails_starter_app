class MakeExternalUserIdGeneric < ActiveRecord::Migration
  def change
    rename_column :external_identifiers, :custom_canvas_user_id, :external_user_id
  end
end
