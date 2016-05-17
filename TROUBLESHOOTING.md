#1 

The file "/usr/include/iconv.h" is missing in your build environment,
which means you haven't installed Xcode Command Line Tools properly.

To install Command Line Tools, try running `xcode-select --install` on
terminal and follow the instructions.  If it fails, open Xcode.app,
select from the menu "Xcode" - "Open Developer Tool" - "More Developer
Tools" to open the developer site, download the installer for your OS
version and run it.

An error occurred while installing eventmachine (1.0.5), and Bundler cannot continue.
Make sure that `gem install eventmachine -v '1.0.5'` succeeds before bundling.

## Fix
`xcode-select --install`


#2

./project.h:116:10: fatal error: 'openssl/ssl.h' file not found
#include <openssl/ssl.h>
         ^

## Fix
`brew install openssl`

Or one may configure bundler to include the appropriate directory when working with event machine.
`bundle config build.eventmachine --with-cppflags=-I$(brew --prefix openssl)/include`

#3 Now bundle has finished, trying to run `rake heroku:secrets RAILS_ENV=production`

Cannot load `Rails.application.database_configuration`:
Could not load database configuration. No such file - ["config/database.yml"]

## Fix
`cp config/database.example.yml config/database.yml`


#4 Now that rake task is done, trying to run `git push heroku master`

Displays a lot of building, says it's using the rails buildpack instead of the nodejs one.
Fails on 
    remote: -----> Preparing app for Rails asset pipeline
    ...
    remote:        Sass::SyntaxError: File to import not found or unreadable: client/partials/base.
    ...

## Fix

gem install bundler

#6 Now there is a complaint about webpack

run `./bin/deploy_heroku` instead of `git push heroku`

(requires bash on the system)


#7 Noticed the admin stuff: tried logging as admin, but given this error

    undefined method `lti_key' for nil:NilClass
    Extracted source (around line #24):

    22 <li>Configuration Type: Paste XML</li>
    23 <li>Give it a name, eg: <%= Rails.application.secrets.application_name %></li>
    24 <li>Paste in this Consumer Key: <strong><%= current_account.lti_key %></strong></li>
    25 <li>Paste in this Shared Secret: <strong><%= current_account.lti_secret %></strong></li>
    26 <li>Paste in the following XML:</li>
    27 </ol>

    Rails.root: /Users/atomicjolt/projects/bch/lti/my_ltisa/my_app

    Application Trace | Framework Trace | Full Trace
    app/views/home/index.html.erb:24:in `_app_views_home_index_html_erb___3042177480137715652_70109914739680'
    Request

## fix
  
  ???

# annoying to have to generate 5 or 6 secrets to put in the config/secrets.yml file

! TODO adjust the rails template to generate those secrets and insert them.
