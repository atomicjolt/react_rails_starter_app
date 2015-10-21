desc "Get basic LTI configuration for an account. Call using: rake lti['code'] where code is the account code for which to generate the LTI xml"
task :lti, [:code] => :environment do |t, args|
  config = Lti::Canvas.basic_config(args[:code])
  puts Lti::Canvas.config_xml(config)
  account = Account.find_by(code: args[:school])
  puts "Key : #{account.lti_key}"
  puts "Secret : #{account.lti_secret}"
end