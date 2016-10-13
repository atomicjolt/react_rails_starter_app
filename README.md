# React Rails Starter App
-----------------------
This project provides a starting point for building a React or OAuth application using Ruby on Rails as a backend.
There are many starter kits that will help you get started with React and Redux. This is the one created by, maintained by and used by [Atomic Jolt](http://www.atomicjolt.com).


## Build a new application using the React Rails Starter App Rails application template:
rails new my_app -m https://raw.githubusercontent.com/atomicjolt/react_rails_starter_app/master/template.rb

## Running React Rails Starter App

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
$ npm run hot
```

## Setting up React Rails Starter App

### File Modifications

#### Change .env for Foreman
Rename `.env.example` to `.env` and configure it to your liking.

Note: the App and Assets subdomains must be different.

#### Modify application name
1. Open application.rb and change `reactrailsstarterapp` to the name you choose.
2. Do a global search and replace for `react_rails_starter_app` and change it to the name you choose.
3. Do a global search and replace for `reactrailsstarterapp` (use only letters or numbers for this name. Special characters like '_' will result in errors).
## Assets
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


## Static
-----------
Files added to the static directory will be copied directly into the build. These files will not be renamed.


#Tests
-----------
Karma and Jasmine are used for testing. To run tests run:

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

or if you have yarn installed:

```
$ yarn
```


To find outdated modules run:

```
$ npm-check-updates
```

Updated packages by passing -u

```
$ npm-check-updates -u
```


#### React
The React Rails Starter App uses React.


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
The Oauth2 Redirect URI and Icon URL will be as follows below. Be sure to replace `reactrailsstarterapp.atomicjolt.xyz` with your domain.
You will need an ID and secret for development and for production. The development URI will use a local domain while the production URI will use your domain.
At AtomicJolt we use atomicjolt.xyz to point to a local computer. lvh.me also works. Ngrok can also be used to simplify tunneling a public
address into your local computer.

**Oauth2 Redirect URI:**
https://reactrailsstarterapp.atomicjolt.xyz/auth/[provider]/callback

**Icon URL:**
https://reactrailsstarterapp.atomicjolt.xyz/oauth_icon.png

Once your request is approved you will receive a Key and Secret. Add these credentials to `config/secrets.yml` and
then add those values to devise.rb. It will look something like this:

config.omniauth :github, Rails.application.secrets.github_developer_id, Rails.application.secrets.github_developer_key, scope: 'user,public_repo'


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
