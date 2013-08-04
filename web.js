var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.use("/bootstrap", express.static(__dirname + '/bootstrap'));
app.use("", express.static(__dirname + ''));

app.get('/', function(request, response) {
  response.send(fs.readFileSync('index.html').toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
