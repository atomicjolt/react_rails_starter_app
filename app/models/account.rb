class Account < ActiveRecord::Base
  
  include Lti::Methods

  validates :domain, uniqueness: true
  validates :code, uniqueness: true
  validates :code, presence: true
  validates :lti_secret, uniqueness: true

  attr_encrypted :canvas_token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt

  before_save :clean_domain

  has_many :users

  def clean_domain
    self.domain = "http://#{self.domain}" unless self.domain.include?("http://") || self.domain.include?("https://")
    self.domain = URI.parse(self.domain).host
  end

  def self.main
    Account.find_by(code: Rails.application.secrets.application_code)
  end

  def basic_lti_xml
    config = Lti::Canvas.basic_config(self.code)
    Lti::Canvas.config_xml(config)
  end

end
