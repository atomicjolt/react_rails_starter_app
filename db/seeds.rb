# add an admin to the default account
admin = CreateAdminService.new.call
puts "CREATED ADMIN USER: " << admin.email
