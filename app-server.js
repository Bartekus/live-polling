var express = require('express');
var app = express();

app.use(express.static('./public')); //Static files hosting
app.use(express.static('./node_modules/bootstrap/dist')); //Static files hosting for bootstrap

var server = app.listen(3000);
var io = require('socket.io').listen(server); //socket.io with chain listen and injected server

io.sockets.on('connection', function(socket) {  //callback function for connection logging
	console.log("Connected: %s", socket.id);
});

console.log("Polling server is running at 'http://localhost:3000'");