desc "Get basic LTI configuration for an account. Call using: rake lti['code'] where code is the account code for which to generate the LTI xml"
task :lti, [:code] => :environment do |t, args|
  config = Lti::Canvas.basic_config(args[:code])
  puts Lti::Canvas.config_xml(config)
  account = Account.find_by(code: args[:school])
  puts "Key : #{account.lti_key}"
  puts "Secret : #{account.lti_secret}"
end

desc "Generate LTI test params. Call using: rake lti_test_params['lti_launch_url'] where lti_launch_url is the lti launch url"
task :lti_test_params, [:lti_launch_url] => :environment do |t, args|
  require File.join(File.dirname(__FILE__), "../../spec/support/lti.rb")
  url = args[:code] || "https://www.example.com/lti/launch"
  puts lti_params({"launch_url" => url}).to_json
end