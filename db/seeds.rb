admin = CreateAdminService.new.call
puts 'CREATED ADMIN USER: ' << admin.email

# Setup default accounts
if Rails.env.production?
  accounts = [{
    code: Rails.application.secrets.application_code,
    name: Rails.application.secrets.application_name,
    domain: Rails.application.secrets.application_url
  }]
else
  accounts = [{
    code: Rails.application.secrets.application_code,
    name: Rails.application.secrets.application_name,
    domain: Rails.application.secrets.application_url
  }]
end

# Setup accounts
accounts.each do |account|
  if a = Account.find_by(code: account[:code])
    a.update_attributes!(account)
  else
    Account.create!(account)
  end
end

admin.account = Account.find_by(code: Rails.application.secrets.application_code)
admin.save!