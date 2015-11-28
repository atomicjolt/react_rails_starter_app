class RemoveExternalIdentifiers < ActiveRecord::Migration
  def change
    add_column :users, :lti_identifier, :string
    add_column :users, :lti_user_id, :string
    add_column :users, :lti_sis_user_id, :string
    User.all.each do |user|
      ei = user.external_identifiers.first      
      user.update_attributes({lti_identifier: ei.identifier, lti_user_id: ei.external_user_id}) if ei
    end
    drop_table :external_identifiers
    add_index :users, :lti_identifier
    add_index :users, :lti_user_id
    add_index :users, :lti_sis_user_id
  end
end
