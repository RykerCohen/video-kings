var express = require('express');
var path = require('path');
var router = express.Router();
var http = require('http');
// var gzippo = require('gzippo');
// var logger = require('morgan');

var app = express();
// app.use(logger());
// app.use(gzippo.staticGzip('' + __dirname));

// serve angular front end files from root path
router.use('/', express.static('app', { redirect: false }));

// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function (req, res, next) {
  res.sendFile(path.resolve('index.html'));
});

module.exports = router;

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
