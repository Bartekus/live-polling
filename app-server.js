var express = require('express');
var _ = require('underscore');
var app = express();

var connections = [];
var title = 'Untitled Presentation';
var audience = [];
var speaker = {};

app.use(express.static('./public')); //Static files hosting
app.use(express.static('./node_modules/bootstrap/dist')); //Static files hosting for bootstrap

var server = app.listen(3000);
var io = require('socket.io').listen(server); //socket.io with chain listen and injected server

io.sockets.on('connection', function(socket) {  //callback function for connection logging

	socket.once('disconnect', function() {  //callback function for disconnect logging

		var member = _.findWhere(audience, { id: this.id }); //searches and assigns disconnected socket id to member variable

		if (member) {
			audience.splice(audience.indexOf(member), 1); //removes the disconnected socket from audience
			io.sockets.emit('audience', audience); //broadcasts new changes in audience to all sockets
			console.log("%s has left. (%s audience members)", member.name, audience.length);
		}

		connections.splice(connections.indexOf(socket), 1); //removing the socket from connections array
		socket.disconnect();  //just in case so that connection is purged from server
		console.log("Disconnected: %s sockets remaining.", connections.length); //log the leftovers connections
	});

	socket.on('join', function(payload) {
		var newMember = {
			id: this.id,
			name: payload.name,
			type: 'member'
		}; //associating the newMember with socket id from the join payload

		this.emit('joined', newMember); //emits this event back to socket (client) performing the join
		audience.push(newMember); //adding newMember to the audience
		io.sockets.emit('audience', audience);  //broadcasts the change in audience state back to all sockets (clients)
		console.log("Audience Joined: %s", payload.name);
	});

	socket.on('start', function(payload) {
		speaker.name = payload.name;
		speaker.id = this.id;
		speaker.type = 'speaker';
		title = payload.title;
		this.emit('joined', speaker);
		console.log("Presentation Started: '%s' by %s", title, speaker.name);
	}); //associating the start payload socket id with the speaker

	socket.emit('welcome', {
		title: title
	});

	connections.push(socket);  //keeping track of connected socked
	console.log("Connected: %s sockets", connections.length);  //log the current number of connections
});

console.log("Polling server is running at 'http://localhost:3000'");