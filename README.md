# React Rails Starter App [![Build Status](https://travis-ci.org/atomicjolt/react_client_starter_app.svg?branch=master)](https://travis-ci.org/atomicjolt/react_client_starter_app) [![Coverage Status](https://coveralls.io/repos/github/atomicjolt/react_rails_starter_app/badge.svg?branch=master)](https://coveralls.io/github/atomicjolt/react_rails_starter_app?branch=master)
-----------------------
There are many starter kits that will help you get started with React and Redux.
This is the one created by, maintained by and used by [Atomic Jolt](http://www.atomicjolt.com).
Atomic Jolt uses this as application as a starting place for Ruby on Rails applications that
utilize React.

## Build a new application using the React Rails Starter App Rails application template:
-----------
rails new my_app -m https://raw.githubusercontent.com/atomicjolt/react_rails_starter_app/master/template.rb

## Running React Rails Starter App
-----------
See [Setting up React Rails Starter App](#setup) below to configuration the application.
Once setup Start Rails and the webpack server:

```
  rails server
  yarn hot
```

## <a name="setup"></a>Setting up React Rails Starter App
-----------

### File Modifications
-----------

#### Setup .env
-----------
Rename `.env.example` to `.env` and configure it to your liking.

Note: the App and Assets subdomains must be different.

#### Modify application name
-----------
1. Open application.rb and change `reactrailsstarterapp` to the name you choose.
2. Do a global search and replace for `react_rails_starter_app` and change it to the name you choose.
3. Do a global search and replace for `reactrailsstarterapp` (use only letters or numbers for this name. Special characters like '_' will result in errors).

#### Secrets file
-----------
Rename `config/secrets.example.yml` to `config/secrets.yml`. Open the file and change each entry to values that are relevant for your application.

*This file should not be committed to your repository.*

You will need to [request a Key ID and Secret from the desired provider](#developer_key).

### Project Dependencies
-----------

#### Requirements
-----------
This application requires:

-   Ruby
-   Rails
-   PostGreSQL
-   npm
-   yarn

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

### <a name="seeds"></a>Setting up Database
-----------
Setup an admin user with:
```
$ rake db:setup
```

### <a name="developer_key"></a>Setting up OAuth
-----------
**Oauth2 Redirect URI:**
https://reactrailsstarterapp.atomicjolt.xyz/auth/[provider]/callback

**Icon URL:**
https://reactrailsstarterapp.atomicjolt.xyz/oauth_icon.png

Once your request is approved you will receive a Key and Secret. Add these credentials to `config/secrets.yml` and
then add those values to devise.rb. It will look something like this:

config.omniauth :github, Rails.application.secrets.github_developer_id, Rails.application.secrets.github_developer_key, scope: 'user,public_repo'

## Development
-----------

### Versions
-----------
We follow some conservative rules:

  1. Use what’s packaged by Debian/Ubuntu, whenever possible, except for Gems and NPM packages.
  2. For software not packaged by Debian/Ubuntu, use the oldest version that still receives security updates.
  3. Gems and NPM packages may use the newest version, as long as doing so does
  not conflict with other software adhering to the previous two rules.

### Client
-----------

#### Webpack
-----------
Webpack is used to build the client side applications. Configure the client applications in client/config/settings.js

#### Structure
-----------
An example 'hello_world' client application is provided in client/apps. Rename or copy and paste this directory
to build additional client applications. The webpack build process will automatically pick up applications
in this directory and generate an entry point for them. The resulting build will include a bundle that uses the
directory name, a vendor and a manifest file. These are served by views/home/index.html.erb by default. If the
application name is changed then be sure to also change the name in index.html.erb.

#### React
-----------
The React Rails Starter App uses React. All client side code can be found in the "client" directory.
This project contains the code required to launch a React application. index.html.erb contains the following
code which will launch a React application whose entry point is 'app.jsx'

```
<% content_for :head do -%>
  <%= webpack_styles_tag 'styles' %>
<% end -%>

<%= render 'shared/default_client_settings' %>
<%= webpack_manifest_script %>
<div id="main-app"></div>
<%= webpack_bundle_tag 'app' %>
```

##### Custom Build Settings
-----------
Default build settings can be overridden by adding an options.json file to the application directory.

###### Options:
-----------
* outName - Change the output directory for an application by specifying "outName" which will override the default name
used when generating a path.
* port - Hard code a port for the application to run. Typically, you won't need to set this value as the build process
will calculate one for you.
* onlyPack - If true don't generate html files. Instead, only run the webpack process and output the resulting files.
* noClean - If true then don't delete files before starting a new build.
* rootOutput - Dump the application directly into the root directory.

Example options.json
`
{
  "outName": "hello_world",
  "port": 8080,
  "onlyPack": true,
  "noClean": false,
  "rootOutput": false,
  "codeSplittingOff": true, // Turn off code splitting
  "extractCssOff": true     // Turn off css extraction
}
`

By default app.jsx is used as the webpack entry point. This can be overriden in webpack.json. Change the buildSuffix,
filename, chunkFilename and other settings:

In webpack.json
`
{
  "file": "app.js",         // The webpack entry. Default is app.jsx
  "buildSuffix": ".js",     // Change the build suffix. Default is _bundle.js
  "filename": "[name]",     // Change the output file name. Default is based on production/development
  "chunkFilename": "[id]",  // Change the chunkFilename. Default is based on production/development
}
`

#### Assets
-----------
Any files added to the assets directory can be used by in code and assigned to a variable. This
allows for referring to assets using dynamically generated strings. The assets will be built according to
the rules specified in your webpack configuration. Typically, this means that in production the names will
be changed to include a SHA.

First importing the assets:
  `import assets from '../libs/assets';`

Then assign the assest to a variable:
  `const img = assets("./images/atomicjolt.jpg");`

The value can then be used when rendering:
  `render(){
    const img = assets("./images/atomicjolt.jpg");
    return<div>
    <img src={img} />
    </div>;
  }`


#### Static
-----------
Files added to the static directory will be copied directly into the build. These files will not be renamed.


#### Tests
-----------
Karma and Jasmine are used for testing. To run tests run:
  `yarn test`

#### Check for updates
-----------
Inside the client directory run:

  `yarn upgrade-interactive`


#### Scripts:
-----------------------
The following scripts are available for testing and building client applications

Run all tests:
  `yarn test`

Generate coverage report:
  `yarn coverage`

Run webpack hot reload server:
  `yarn hot`

Run reload server for a specific application:
  `yarn hot [app name]`

Serve production assets. Must run `yarn build` first:
  `yarn live`

Build development version including html pages:
  `yarn build_dev`

Only run the webpack build without generating html pages or subdirectories. This will output all results
directly into the build/dev directory
  `yarn build_dev_pack`

Build for production:
  `yarn build`

Only run the webpack build without generating html pages or subdirectories. This will output all results
directly into the build/prod directory
  `yarn build_pack`

After setting up .s3-website.json this will create a S3 bucket and set it as a website:
  `yarn create`

Release a production build to the S3 website bucket created by `yarn create`
  `yarn release`

Run a linter over the project:
  `yarn lint`

Wipe out all node modules:
  `yarn nuke`

## Deployment
-----------

### Heroku
-----------

Make sure you have signed up for a heroku account [Heroku](http://www.heroku.com). Then follow the instructions provided by Heroku to create your application.

Push secrets to production:
```
$ rake heroku:secrets RAILS_ENV=production
```

Deploy to Heroku:
```
$ git push heroku master
```

## Database
-----------
This application uses PostgreSQL with ActiveRecord.

If you run into an error while installing the pg gem try including the path to pg_config. For an example see
the command below. Be sure to use the correct version for the pg gem and the correct path to pg_config.

  `gem install pg -v '1.2.2' --source 'https://rubygems.org/' -- --with-pg-config=/Users/jbasdf/.asdf/installs/postgres/9.5.19/bin/pg_config`

## Tests
-----------
You may need to install chromedriver if you haven't already.

```
$ brew install chromedriver
```

To run tests:

```
$ rake spec
```
