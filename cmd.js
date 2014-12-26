#!/usr/bin/env node

var http = require('http');
var concat = require('concat-stream');
var thrust = require('node-thrust');

var width = 1024;
var height = 600;
var port = 9966;
if (process.argv[2])
  width = parseInt(process.argv[2]);
if (process.argv[3])
  height = parseInt(process.argv[3]);

process.stdin.pipe(concat(function(data) {
  var server = http.createServer(function(req, res) {
    res.end(data);
  })

  server.listen(port, function() {
    thrust(function(err, api) {
      if (err) {
        console.error('error starting thrust', err)
        process.exit(1)
      }

      var local_url = 'http://localhost:' + port;
      var win = api.window({
        root_url: local_url,
        size: {
          width: width,
          height: height
        }
      })
      win.show();
      win.focus();
    }, {quiet: true});
  })
}))
