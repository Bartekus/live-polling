var express = require('express');
var app = express();

var connections = [];
var title = 'Untitled Presentation';
var audience = [];

app.use(express.static('./public')); //Static files hosting
app.use(express.static('./node_modules/bootstrap/dist')); //Static files hosting for bootstrap

var server = app.listen(3000);
var io = require('socket.io').listen(server); //socket.io with chain listen and injected server

io.sockets.on('connection', function(socket) {  //callback function for connection logging

	socket.once('disconnect', function() {  //callback function for disconnect logging
		connections.splice(connections.indexOf(socket), 1); //removing the socket from connections array
		socket.disconnect();  //just in case so that connection is purged from server
		console.log("Disconnected: %s sockets remaining.", connections.length); //log the leftovers connections
	});

	socket.on('join', function(payload) {
		var newMember = {
			id: this.id,
			name: payload.name
		}; //associating the socket id with the join payload
		this.emit('joined', newMember); //emits this event back to socket (client) performing the join
		audience.push(newMember); //adding newMember to the audience
		io.sockets.emit('audience', audience);  //broadcasts the change in audience state back to all sockets (clients)
		console.log("Audience Joined: %s", payload.name);
	});

	socket.emit('welcome', {
		title: title
	});

	connections.push(socket);  //keeping track of connected socked
	console.log("Connected: %s sockets", connections.length);  //log the current number of connections
});

console.log("Polling server is running at 'http://localhost:3000'");