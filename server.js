var express = require('express');
var app = express();

app.use(express.static(__dirname + '/scripts'));;

app.get('/', function(req, res) {
    res.sendfile('index.html');
});

var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Running at %s on port %s", host, port);
})