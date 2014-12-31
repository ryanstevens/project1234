var http = require('http'),
  packageJSON = require('./package'),
  port = process.env.PORT || 9001;

http.createServer(function(req, res) {

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    port : port,
    'version' : packageJSON.version,
    NODE_ENV : process.env.NODE_ENV,
    foo : process.env.foo
  }));

}).listen(port);