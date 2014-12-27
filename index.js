var http = require('http');
var thrust = require('node-thrust');
var port = 9966;

module.exports = function(data, width, height, cb) {
  var server = http.createServer(function(req, res) {
    res.end(data);
  })

  server.listen(port, function() {
    thrust(function(err, api) {
      if (err) {
        server.close();
        server.unref();
        if (cb) cb(err);
        return;
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
}
