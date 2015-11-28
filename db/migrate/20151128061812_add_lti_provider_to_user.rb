class AddLtiProviderToUser < ActiveRecord::Migration
  def change
    add_column :users, :lti_provider, :string
  end
end
