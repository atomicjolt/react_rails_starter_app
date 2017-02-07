# Setup default accounts
accounts = [{
  code: Rails.application.secrets.application_code,
  name: Rails.application.secrets.application_name,
  domain: Rails.application.secrets.application_url,
  lti_key: Rails.application.secrets.default_lti_key,
  lti_secret: Rails.application.secrets.default_lti_secret,
  canvas_uri: Rails.application.secrets.canvas_url,
}]

# Setup accounts
accounts.each do |account|
  if a = Account.find_by(code: account[:code])
    a.update_attributes!(account)
  else
    Account.create!(account)
  end
end

# add an admin to the default account
admin = CreateAdminService.new.call
puts "CREATED ADMIN USER: " << admin.email
admin.save!
