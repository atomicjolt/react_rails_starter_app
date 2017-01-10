# If bundler starts to act up run these commands to start over and clean up:
# rm -rf ~/.bundle/ ~/.gem/; rm -rf $GEM_HOME/bundler/ $GEM_HOME/cache/bundler/; rm -rf .bundle/; rm -rf vendor/cache/; rm -rf Gemfile.lock
# rvm gemset empty reactrailsstarterapp
# bundle install

source "https://rubygems.org"

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails", "4.2.7"

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

# deployment
gem "unicorn"
gem "unicorn-rails"

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
  gem "guard-bundler"
  gem "guard-rails"
  gem "guard-rspec"
  gem "hub", require: nil
  gem "mail_view"
  gem "mailcatcher"
  gem "quiet_assets"
  gem "rails_apps_pages"
  gem "rails_apps_testing"
  gem "rails_layout"
  gem "rb-fchange", require: false
  gem "rb-fsevent", require: false
  gem "rb-inotify", require: false
  gem "spring"
end

group :development, :test do
  gem "byebug"
  gem "coveralls", require: false
  gem "dotenv-rails"
  gem "factory_girl_rails"
  gem "faker"
  gem "rspec-rails"
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
