# Template Website

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

***Since our Yeoman site is just a set of static pages, we can’t just stick it up on Heroku and expect it to work. So we create a express server for the app ('/app/index.js').***

## Build & Development

Clone
```
$ git clone git@github.com:danielstpaul/website_template.git <app__name>
$ cd <app__name>
```

Install Dependencies
```
$ npm install
$ bower install
```

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

# Production Version Control

<!-- Grunt Build
```
$ grunt build
```
'dist' folder will appear in root directory

Initialise node app
```
$ cd dist
$ npm init
```

Initialise server
```
$ npm install express morgan gzippo --save
```

Create server file
```
$ touch index.js
```
put the following into your index.js file:
```
var express = require('express');
var http = require('http');
var gzippo = require('gzippo');
var logger = require('morgan');

var app = express();
app.use(logger());
app.use(gzippo.staticGzip('' + __dirname));

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
```

Create a Procfile
```
$ touch Procfile
```
put the following into your Procfile file:
```
web: node index.js
``` -->

Initialize local git repo in 'dist' folder and commit code
```
$ cd dist
$ git init
$ git add .
$ git commit -m "initial commit"
```

# Deployment

***for Heroku***
Create Heroku App
```
$ heroku create <app_name>
```

Edit Gruntfile to point to your own heroku or github pages remote (Line 424 Gruntfile.js)
```
buildcontrol: {
  options: {
    dir: 'dist',
    commit: true,
    push: true,
    message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
  },
  heroku: {
    options: {
      remote: 'https://git@heroku.com:app-name-99.git',
      branch: 'master'
    }
  }
},
```
for github pages check Gruntfile.js

Deploy (push dist to heroku)
```
$ cd ..
$ grunt deploy
```

***with heroku you may have to scale:***
```
$ heroku ps:scale web=1
$ cd dist
$ heroku open
```

# Updates

Run updates to production by simply running ```grunt build``` and running ```grunt deploy```
