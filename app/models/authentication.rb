class Authentication < ApplicationRecord

  attr_encrypted :token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt
  attr_encrypted :secret, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt
  attr_encrypted :refresh_token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt

  belongs_to :user, inverse_of: :authentications

  validates :provider, presence: true, uniqueness: { scope: [:uid, :user_id, :provider_url] }

end
