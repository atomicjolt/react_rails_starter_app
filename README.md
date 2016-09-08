#Atomic Client
-----------------------
There are many starter kits that will help you get started with React and Redux. This is the one created by, maintained by and used by [Atomic Jolt](http://www.atomicjolt.com). Atomic Jolt uses this as application as a starting place for our [Ruby on Rails React starter application](https://github.com/atomicjolt/react_starter_app) and our [Firebase React starter appliction](https://github.com/atomicjolt/react_firebase_starter_app).


#Getting Started:
-----------------------

Make sure to install git and npm before you start then:

1. git clone https://github.com/atomicjolt/react_client_starter_app.git my_project_name
2. Rename .env.example to .env. This file contains the port the server will use. The default 8080 should be fine, but you can also use a local domain or ngrok if you wish.
3. npm install
4. Start server with:

  `npm run hot`

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

  `npm run test`


#Check for updates
-----------
Inside the client directory run:

  `npm-check-updates`


#Setup Deploy:
-----------------------

  1. Install the s3_website gem:

    `gem install s3_website`

  2. Create s3_website.yml:

    `s3_website cfg create`

  3. Setup and AWS user:

    1. Login to your AWS console
    2. Find Identity & Access Management (IAM)
    3. Click 'Users'
    4. Click 'Create New Users'
    5. Save the user's credentials
    6. Click on the user
    7. Click the permissions tab.
    8. Under 'Inline Policies' create a new custom policy and paste in the policy below. Be sure to change the domains:

    For more details see the [s3_website gem instructions](https://github.com/laurilehmijoki/s3_website).

    ###IAM Policy:
    ```json

      {
        "Statement": [
            {
                "Action": [
                    "s3:ListBucket"
                ],
                "Effect": "Allow",
                "Resource": "arn:aws:s3:::www.reactclientstarterapp.com"
            },
            {
                "Action": "s3:*",
                "Effect": "Allow",
                "Resource": [
                    "arn:aws:s3:::www.reactclientstarterapp.com",
                    "arn:aws:s3:::www.reactclientstarterapp.com/*"
                ]
            }
        ]
      }
    ```

  4. Configure bucket as website:

    `s3_website cfg apply`


#Production
-----------------------
If you want to see what your application will look like in production run

  `npm run live`

This will serve files from the build/prod directory.


#Deploy:
-----------------------

  Build a development release without deploying:

  `npm run build_dev`


  Build a release without deploying:

  `npm run build`


  Build a release and deploy:

  `npm run release`


License and attribution
-----------------------
MIT