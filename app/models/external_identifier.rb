class ExternalIdentifier < ApplicationRecord

  belongs_to :user

  validates :identifier, :uniqueness => { :scope => :provider }

end
