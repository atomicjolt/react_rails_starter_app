#React Client Starter App [![Build Status](https://travis-ci.org/atomicjolt/react_client_starter_app.svg?branch=master)](https://travis-ci.org/atomicjolt/react_client_starter_app) [![Coverage Status](https://coveralls.io/repos/github/atomicjolt/react_client_starter_app/badge.svg?branch=coveralls)](https://coveralls.io/github/atomicjolt/react_client_starter_app?branch=coveralls)
-----------------------
There are many starter kits that will help you get started with React and Redux.
This is the one created by, maintained by and used by [Atomic Jolt](http://www.atomicjolt.com).
Atomic Jolt uses this as application as a starting place for our
[Ruby on Rails and React starter application](https://github.com/atomicjolt/react_rails_starter_app)
and our [Firebase React starter appliction](https://github.com/atomicjolt/react_firebase_starter_app).


#Getting Started:
-----------------------

Make sure to install git, npm and yarn before you start then:

1. git clone https://github.com/atomicjolt/react_client_starter_app.git my_project_name
2. Rename .env.example to .env. This file contains the port the server will use.
   The default 8080 should be fine, but you can also use a local domain or ngrok if you wish.
3. Install packages with

    `yarn`

4. Start server with:

  `yarn hot`

then visit http://localhost:8080


# Using the React Client Starter App
-----------------------
Source code lives in the client directory. Modify html and js files in that directory to build your application.


## React.js
-----------
React code can be found in client/js. We use Redux and the React-Router.


## Html
-----------
All html files live in client/html. The build process will properly process ejs in any html files as well as process markdown for files that end in .md. All front matter in .md files will be available to the ejs templates. See about.md for an example.


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

  `yarn test`


#Check for updates
-----------
Inside the client directory run:

  `npm-check-updates`


#Deploy to S3:
-----------------------

  1. Setup credentials. If you've already setup your Amazon credentials in ~/.aws/credentials
  you will be able to do something similar to the following where "myprofile" is one of
  the AWS profiles found in ~/.aws/credentials:

    export AWS_DEFAULT_PROFILE=myprofile
    export AWS_PROFILE=myprofile

  You can also use a .env file. See the [s3-website](https://github.com/klaemo/s3-website) documentation for more options.

  2. Edit configuration.

    Open up .s3-website.json and set the desired bucket name

  3. Configure the bucket as a website

    `yarn create`

  4. Deploy.

    `yarn release`

#Production
-----------------------
If you want to see what your application will look like in production run

  `yarn live`

This will serve files from the build/prod directory.


#Deploy:
-----------------------

  Build a development release without deploying:

  `yarn build_dev`


  Build a release without deploying:

  `yarn build`


  Build a release and deploy:

  `yarn release`


License and attribution
-----------------------
MIT