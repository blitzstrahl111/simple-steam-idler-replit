var http = require('http');

http.createServer(function (req, res) {
  res.write("We are working");
  res.end();
}).listen(8080);
