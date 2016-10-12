# add an admin to the default account
admin = CreateAdminService.create_admin(account)
puts 'CREATED ADMIN USER: ' << admin.email

