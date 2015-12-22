# setup default account
account_attrs = {
  code: Rails.application.secrets.application_code,
  name: Rails.application.secrets.application_name,
  domain: Rails.application.secrets.application_url,
  lti_key: Rails.application.secrets.default_lti_key,
  lti_secret: Rails.application.secrets.default_lti_secret,
  canvas_uri: Rails.application.secrets.canvas_url,
  canvas_token: Rails.application.secrets.canvas_token
}

# Setup accounts
if account = Account.find_by(code: account_attrs[:code])
  account.update_attributes!(account_attrs)
else
  account = Account.create!(account_attrs)
end

# add an admin to the default account
admin = CreateAdminService.create_admin(account)
puts 'CREATED ADMIN USER: ' << admin.email

