desc "Get basic LTI configuration for an account. Call: rake lti['account_code']"
task :lti, [:code] => :environment do |t, args|
  config = Lti::Canvas.basic_config(args[:code])
  puts Lti::Canvas.config_xml(config)
end
