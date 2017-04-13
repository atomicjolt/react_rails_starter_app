namespace :generate do
  desc "Seed the account with users"
  task :users, [:users, :id] => [:environment] do |_t, args|
    i = 0
    users = args.users.to_i || 1
    id = args.id.to_i || 1
    account = Account.find(id)
    puts "Creating users for " + account.name + ", one moment please."
    while i < users
      puts account.users.create(FactoryGirl.attributes_for(:user))
      i += 1
    end
    puts "Created #{users} users"
  end

  desc "seed the database with accounts"
  task :accounts, [:accounts] => [:environment] do |_t, args|
    i = 0
    accounts = args.accounts.to_i || 1
    while i < accounts
      puts Account.create(FactoryGirl.attributes_for(:account))
      i += 1
    end
    puts "Created #{accounts} accounts"
  end
end
