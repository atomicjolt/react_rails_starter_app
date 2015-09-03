class Profile < ActiveRecord::Base

  belongs_to :user
  belongs_to :state
  belongs_to :country
  belongs_to :language

  delegate :email, :to => :user
  delegate :username, :to => :user
  delegate :display_name, :to => :user
  delegate :name, :to => :user

end
