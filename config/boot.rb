# Set up gems listed in the Gemfile.
ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../../Gemfile', __FILE__)

require 'bundler/setup' if File.exist?(ENV['BUNDLE_GEMFILE'])


# Rails 4.2 stopped binding to 0.0.0.0 see http://guides.rubyonrails.org/4_2_release_notes.html#default-host-for-rails-server
# This breaks ngrok. The code below was added to restore the binding to 0.0.0.0
# https://github.com/samuelkadolph/unicorn-rails/issues/12
require 'rubygems'
require 'rails/commands/server'

module Rails
  class Server
    alias :default_options_alias :default_options
    def default_options
      default_options_alias.merge!(:Host => '0.0.0.0')
    end
  end
end