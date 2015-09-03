class ExternalIdentifier < ActiveRecord::Base

  belongs_to :user

  validates :identifier, :uniqueness => { :scope => :provider }

end
