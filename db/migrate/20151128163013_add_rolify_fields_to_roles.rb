class AddRolifyFieldsToRoles < ActiveRecord::Migration
  def change
    add_column :roles, :resource_id, :integer
    add_column :roles, :resource_type, :string
    add_index :roles, :name
    add_index :roles, [:name, :resource_type]
    add_index :roles, [:name, :resource_type, :resource_id]
  end
end
