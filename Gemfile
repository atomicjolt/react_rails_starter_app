# If bundler starts to act up run these commands to start over and clean up:
# rm -rf ~/.bundle/ ~/.gem/; rm -rf $GEM_HOME/bundler/ $GEM_HOME/cache/bundler/; rm -rf .bundle/; rm -rf vendor/cache/; rm -rf Gemfile.lock
# rvm gemset empty reactrailsstarterapp
# bundle install

source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem "rails", github: "rails/rails"
gem "rails", "~> 5.2.4"

# Improve boot time
gem "bootsnap", require: false

# Database
gem "pg"

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
gem "puma"

# Used for deploying to Heroku. Can be removed if not deploying to Heroku.
gem "heroku_secrets", git: "https://github.com/alexpeattie/heroku_secrets.git"

# API Related
gem "httparty"
gem "rack-cors", require: "rack/cors"

# Paging
gem "will_paginate"

# Javascript
gem "webpacker"

# Assets
gem "sassc-rails"

# This is only here because we are on ruby 2.4. When we upgrade ruby we can remove this
gem "sprockets", "~>3.7.2"

group :development do
  # UI
  gem "autoprefixer-rails"
  gem "non-stupid-digest-assets" # also compile assets without digest (fixes font problem)
  gem "uglifier"

  gem "better_errors"
  gem "binding_of_caller", platforms: [:mri_21]
  gem "hub", require: nil
  gem "mail_view"
  gem "rails_apps_pages"
  gem "rails_apps_testing"
  gem "rails_layout"
  gem "rb-fchange", require: false
  gem "rb-fsevent", require: false
  gem "rb-inotify", require: false
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem "listen"
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem "spring"
  gem "spring-commands-rspec"
  gem "spring-watcher-listen"
  gem "web-console"
end

group :linter do
  gem "pronto"
  gem "pronto-eslint_npm", require: false
  gem "pronto-rubocop", require: false
  gem "rubocop"
end

group :development, :test do
  gem "byebug", platform: :mri
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "guard-rspec", require: false
  gem "rspec-rails"
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
