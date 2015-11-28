class AddAdminToUser < ActiveRecord::Migration
  def change
    add_column :users, :admin, :boolean, default: false
    add_column :users, :super_admin, :boolean, default: false
    User.all.each{|u| u.update_attribute(:admin, true) if u.role == 'admin'}
    remove_column :users, :role
  end
end
