# Tmp

This project provides a starting point for building a Canvas LTI or OAuth application.

## Running Tmp

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
$ ngrok --subdomain tmp --log stdout 3000
```

## Setting up Tmp

### File Modifications

#### Change .env for Foreman
Rename `.env.example` to `.env` and configure it to your liking.

Note: the App and Assets subdomains must be different.

#### Modify application name
1. Open application.rb and change `tmp` to the name you choose.
2. Do a global search and replace for `tmp` and change it to the name you choose.
3. Do a global search and replace for `tmp` (use only letters or numbers for this name. Special characters like '_' will result in errors).

#### Secrets file
Rename `config/secrets.example.yml` to `config/secrets.yml`. Open the file and change each entry to values that are relevant for your application.

*This file should not be committed to your repository.*

You will need to [request a Canvas ID and Secret from Instructure](#developer_key). You will also
need to setup a default account and provide that account's "code" for the "application_code" entry in secrets.yml. See the [seeds](#seeds) section below for information on setting up the default account.

### Project Dependencies

#### Requirements

This application requires:

-   Ruby
-   Rails
-   PostGreSQL

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

#### NGROK
To test your application with Canvas you will need to provide a public SSL url. The simpliest way to do this is to use ngrok which can be downloaded from [ngrok](https://ngrok.com/).

Running 'ngrok --subdomain tmp --log stdout 3000' will create a tunnel. You will access your application using the ngrok url:

`https://tmp.ngrok.com`

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

##### npm-check-updates
[npm-check-updates](https://www.npmjs.com/package/npm-check-updates) is used to find out of date modules and automatically update them.
To find outdated modules install npm-check-updates:

```
$ npm install -g npm-check-updates
```

and then run:

```
$ npm-check-updates
```

to update all out of date packages run:

```
$ npm-check-updates -u
```


After updating be sure to run shrinkwrap again:

```
$ npm shrinkwrap
```

#### React
Most LTI applications need to be single page applications in order to avoid a bug that prevents cookies from being written in some
browsers. The Tmp uses React. During development run the [React Hot Loader](https://github.com/gaearon/react-hot-loader).


### <a name="seeds"></a>Setting up Database

If you have setup .env and the secrets.yml file then the seeds file shouldn't need to be changed. However,
if you need to customize the values in the database or add addition records to the database, 
open db/seeds.rb and configuration a default account for development and production. 
Here's a summary of the values and their purpose:

- **code:** Uniquely identifies the account. This is used for the subdomain when running
applications on a single domain. By default this will be set to APP_SUBDOMAIN from the .env file.
- **domain:** Custom domain name. By default this is set to application_url from the secrets.yml file.
- **name:** Name the account anything you'd like. By default this is set to application_name from the secrets.yml file.
- **lti_key:** A unique key for the LTI application you are building. This will be provided to Canvas. By default this will be set to APP_SUBDOMAIN from the .env file.
- **lti_secret:** The shared secret for your LTI application. This will be provided to Canvas
and will be used to sign the LTI request. Generate this value using `rake secret`. Alternatively if you leave this field empty an LTI secret will be automatically generated for the account.
- **canvas_uri:** The URI of the Canvas institution to be associated with a specific account.


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


### <a name="developer_key"></a>Request a Canvas Developer Key

Go to the [Canvas Developer Key Request Form](https://docs.google.com/forms/d/1C5vOpWHAAl-cltj2944-NM0w16AiCvKQFJae3euwwM8/viewform)
Most of the fields will be specific to your organization. The Oauth2 Redirect URI and Icon URL will be as follows below. Be sure to replace `tmp.ngrok.com` with your domain. You will need an ID and secret for development and for production. The
development URI will use ngrok while the production URI will use your domain.

**Oauth2 Redirect URI:**
https://tmp.ngrok.io/users/auth/canvas/callback

**Icon URL:**
https://tmp.ngrok.io/oauth_icon.png

Once your request is approved you will receive a Canvas ID and Secret. Add these credentials to the `config/secrets.yml` file under `canvas_id` and `canvas_secret`.


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

### Demo Arigato

This project was created for the Sales team at Instructure. It makes it simple to populate a sample Canvas course using values from Google Drive Spreadsheets.

Source Code: [https://github.com/atomicjolt/demo_arigato](https://github.com/atomicjolt/demo_arigato)


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
