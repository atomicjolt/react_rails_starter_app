# If bundler starts to act up run these commands to start over and clean up:
# rm -rf ~/.bundle/ ~/.gem/; rm -rf $GEM_HOME/bundler/ $GEM_HOME/cache/bundler/; rm -rf .bundle/; rm -rf vendor/cache/; rm -rf Gemfile.lock
# rvm gemset empty reactrailsstarterapp
# bundle install

source "https://rubygems.org"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0', '>= 5.0.0.1'

# Database
gem "pg"

# UI
gem "autoprefixer-rails"
gem "non-stupid-digest-assets" # also compile assets without digest (fixes font problem)
gem "sass-rails"
gem "uglifier"

# authentication, authorization, integrations
gem "attr_encrypted"
gem "cancancan"
gem "devise"
gem "jwt", "~> 1.5.0" # json web token
gem "oauth", "~> 0.5.0"
gem "omniauth"

# Email
gem "sendgrid"

# JSON parser
gem "yajl-ruby", require: "yajl"

# server
gem 'puma', '~> 3.0'
#gem 'unicorn'
#gem 'unicorn-rails'

# Used for deploying to Heroku. Can be removed if not deploying to Heroku.
gem "heroku_secrets", git: "https://github.com/alexpeattie/heroku_secrets.git"

# API Related
gem "httparty"
gem "rack-cors", require: "rack/cors"

# Paging
gem "will_paginate"

group :development do
  gem "better_errors"
  gem "binding_of_caller", platforms: [:mri_21]
  gem "hub", require: nil
  gem "mailcatcher"
  gem "mail_view"
  gem "quiet_assets"
  gem "rails_apps_pages"
  gem "rails_apps_testing"
  gem "rails_layout"
  gem "rb-fchange", require: false
  gem "rb-fsevent", require: false
  gem "rb-inotify", require: false
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'better_errors'      # Modifies default Rails error page to be more useful
  gem 'binding_of_caller'  # Used by better_errors gem
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
end

group :development, :test do
  gem 'byebug', platform: :mri
  gem "coveralls", require: false
  gem 'dotenv-rails'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'rspec-rails'
  gem "rubocop"
end

group :test do
  gem "capybara"
  gem "database_cleaner"
  gem "launchy"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
  gem "webmock"
end

group :production do
  gem "rails_12factor"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
