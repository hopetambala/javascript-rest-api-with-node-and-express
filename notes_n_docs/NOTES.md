Run Application
$ npm start
$ mongod --dbpath [path/to/project/database/folder]
-------------------------
Relevant Files for Developer
`package.json
`app.js
`route folder
`views folder
`public folder (for access to global functions and stylsheets)
-------------------------
package.json lists our dependences 
---
app.js is the main director of traffic
---
routes folder holds js files that control which
	views we're opening
	'Routing' is the mechanism by which requests 
	(as specified by a URL and HTTP method) are routed to 
	the code that handles them.
---
views holds html(or in this case jade) files for templating
---
public/javascripts holds javascript scripts that you can fall to run functions for
	you
---
public/stylesheets holds CSS that controls styling for views
---
databases: need three terminals
	one to initialize mongodb database which holds our data
	one to run express server
	one to run mongo client (for database managment)

creates and initializes mongodb database in our project
$ mongod --dbpath [wherever you put your data folder]

run a mongodb client (must be done in separate terminal
$ mongo
$ use nodetest (or project name)
can use mongo commands from there
---
To Deploy Must Use
`heroku (server for application)
`mlab (server for database)

mLab
To connect to our database using the mongo shell (after creating account and database online):
$ mongo ds121588.mlab.com:21588/puente_dev -u <dbuser> -p <dbpassword>
URL for Our Database
$ mongodb://<dbuser>:<dbpassword>@ds121588.mlab.com:21588/puente_dev
replace in-app URL for database

Heroku
$ git add .
$ git commit -m "Added a Procfile."
$ heroku login
$ heroku create
$ git push heroku master
...
to open app
$ heroku open
