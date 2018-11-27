class Authentication < ApplicationRecord

  attr_encrypted :token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt
  attr_encrypted :secret, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt
  attr_encrypted :refresh_token, key: Rails.application.secrets.encryption_key, mode: :per_attribute_iv_and_salt

  belongs_to :user, inverse_of: :authentications

  validates :provider, presence: true, uniqueness: { scope: [:uid, :user_id, :provider_url] }

  # Find an authentication using an auth object provided by omniauth
  def self.for_auth(auth)
    provider_url = UrlHelper.scheme_host_port(auth["info"]["url"])
    Authentication.find_by(
      uid: auth["uid"].to_s,
      provider: auth["provider"],
      provider_url: provider_url,
    )
  end

  # Build an authentication using an auth object provided by omniauth
  def self.authentication_attrs_from_auth(auth)
    info = auth["info"] || {}
    provider_url = UrlHelper.scheme_host_port(info["url"])
    attributes = {
      uid: auth["uid"].to_s,
      username: info["nickname"],
      provider: auth["provider"],
      provider_url: provider_url,
    }
    if credentials = auth["credentials"]
      attributes[:token] = credentials["token"]
      attributes[:secret] = credentials["secret"]
      attributes[:refresh_token] = credentials["refresh_token"] if credentials["refresh_token"]
    end
    attributes
  end

end
