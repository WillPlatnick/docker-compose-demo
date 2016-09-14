var express = require('express'),
    http = require('http'),
    redis = require('redis');

var os = require("os");
var hostname = os.hostname();

var app = express();


var client = redis.createClient('6379', 'redis');


app.get('/', function(req, res, next) {
  client.incr('counter', function(err, counter) {
    if(err) return next(err);
    res.send('This page has been viewed ' + counter + ' times! (Running inside container ' + hostname);
  });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});
