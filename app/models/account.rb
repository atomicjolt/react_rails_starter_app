class Account < ActiveRecord::Base
  include Lti::Methods

  validates :domain, uniqueness: true
  validates :code, uniqueness: true
  validates :code, presence: true
  validates :lti_secret, uniqueness: true

  before_save :clean_domain

  has_many :users

  def clean_domain
    self.domain = "http://#{self.domain}" unless self.domain.include?("http://") || self.domain.include?("https://")
    self.domain = URI.parse(self.domain).host
  end

  def self.main
    Account.find_by(code: Rails.application.secrets.application_code)
  end
end
