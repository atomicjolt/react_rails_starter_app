class Role < ActiveRecord::Base

  has_many :permissions, :dependent => :destroy
  has_many :users, :through => :permissions

  validates :name, :presence => true
  validates :name, :uniqueness => true

  def self.by_alpha
    order('roles.name ASC')
  end

  # roles can be defined as symbols.  We want to store them as strings in the database
  def name= val
    write_attribute(:name, val.to_s)
  end

end