# React Starter App

This project provides a starting point for building a React or OAuth application.

## Build a new application using the React Starter App Rails application template:
rails new testapp -m https://raw.githubusercontent.com/atomicjolt/react_starter_app/master/template.rb

## Running React Starter App

### With Foreman
Foreman makes it simple to startup all the services required to run the application in development mode. To start the application using foreman simply run:

```
$ foreman start -f Procfile.dev
```

Make sure you have the latest version of Foreman installed.

#### Environment
Foreman will automatically find and read the .env file.

### Without Foreman
If you need to run services individually or just don't like Foreman you can run each service seperately:

```
$ rails server
$ cd client && nodemon webpack.hot.js
$ ngrok --subdomain master_assets --log stdout 8080
$ ngrok --subdomain reactstarterapp --log stdout 3000
```

## Setting up React Starter App

### File Modifications

#### Change .env for Foreman
Rename `.env.example` to `.env` and configure it to your liking.

Note: the App and Assets subdomains must be different.

#### Modify application name
1. Open application.rb and change `ReactStarterApp` to the name you choose.
2. Do a global search and replace for `react_starter_app` and change it to the name you choose.
3. Do a global search and replace for `reactstarterapp` (use only letters or numbers for this name. Special characters like '_' will result in errors).

#### Secrets file
Rename `config/secrets.example.yml` to `config/secrets.yml`. Open the file and change each entry to values that are relevant for your application.

*This file should not be committed to your repository.*

You will need to [request a Key ID and Secret from the desired provider](#developer_key). You will also
need to setup a default account and provide that account's "code" for the "application_code" entry in secrets.yml. See the [seeds](#seeds) section below for information on setting up the default account.

### Project Dependencies

#### Requirements

This application requires:

-   Ruby
-   Rails
-   PostGreSQL

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

#### NGROK
To test your application with an OAuth provider you will need to provide a public SSL url. The simpliest way to do this is to use ngrok which can be downloaded from [ngrok](https://ngrok.io/).

Running 'ngrok --subdomain reactstarterapp --log stdout 3000' will create a tunnel. You will access your application using the ngrok url:

`https://reactstarterapp.ngrok.io`

#### Webpack
Packs CommonJs/AMD modules for the browser.
```
$ npm install -g webpack
$ cd client && webpack
```

#### Install Javascript Libraries
To get started run:

```
$ npm install
```

##### npm-shrinkwrap
[npm-shrinkwrap](https://github.com/uber/npm-shrinkwrap) is used to lock specific versions.
npm-shrinkwrap.json is included in the project. To verify your package.json & node_modules tree are in sync run:

```
$ npm shrinkwrap
```

To find outdated modules run:

```
$ npm outdated
```

Packages must be updated manually. For example:

```
$ npm update lodash
```

After updating be sure to run shrinkwrap again:

```
$ npm shrinkwrap
```

#### React
The React Starter App uses React. During development run the [React Hot Loader](https://github.com/gaearon/react-hot-loader).


### <a name="seeds"></a>Setting up Database

Open db/seeds.rb and configuration a default account for development and production. Here's a summary of the values and their purpose:

- **code:** Uniquely identifies the account. This is used for the subdomain when running
applications on a single domain.
- **domain:** Custom domain name.
- **name:** Name the account anything you'd like.

Once you've setup your seeds file run it to setup database defaults:

```
$ rake db:setup
```
or

```
$ rake db:create
$ rake db:schema:load
$ rake db:seed
```


### <a name="developer_key"></a>Setting up OAuth

Visit the provider (Facebook, Twitter, Google, etc) to obtain an OAuth key and secret. Most of the fields will be specific to your organization. 
The Oauth2 Redirect URI and Icon URL will be as follows below. Be sure to replace `reactstarterapp.ngrok.io` with your domain. 
You will need an ID and secret for development and for production. The
development URI will use ngrok while the production URI will use your domain.

**Oauth2 Redirect URI:**
https://reactstarterapp.ngrok.io/auth/[provider]/callback

**Icon URL:**
https://reactstarterapp.ngrok.io/oauth_icon.png

Once your request is approved you will receive a Key and Secret. Add these credentials to the `config/secrets.yml`.


## Deployment

### Heroku

Make sure you have signed up for a heroku account [Heroku](http://www.heroku.com). Then follow the instructions provided by Heroku to create your application.

Push secrets to production:
```
$ rake heroku:secrets RAILS_ENV=production
```

Deploy to Heroku:
```
$ git push heroku master
```

### Other Services

By default `config/unicorn.rb` is setup to deploy to Heroku. Open that file, comment out the Heroku section and uncomment the other configuration to setup unicorn for deployment to another service like AWS.

## Examples

Atomic Jolt has built a number of applications based on this source.


## Database

This application uses PostgreSQL with ActiveRecord.

## Tests

You may need to install chromedriver if you haven't already.

```
$ brew install chromedriver
```

To run tests:

```
$ rake spec
```
