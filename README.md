#Notes:
-----------------------
Start server with:

  `npm run hot`

then visit http://localhost:8080


#Development:
-----------------------
Source code lives in the client directory. 


#Tests
-----------
  `npm run test`
    

#Check for updates
-----------
Inside the client directory run:

  `npm-check-updates`


#Deploy:
-----------------------

  Make sure the gem is installed:
  
  `gem install s3_website`

  Build:

  `gulp build --release`
  
  Configure 

  Deploy:
  
  `s3_website push`


License and attribution
-----------------------
MIT