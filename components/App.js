var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var io = require('socket.io-client');
var Header = require('./parts/Header');

var APP = React.createClass({

	getInitialState() {
		return {
			status: 'disconnected',
			title: '',
			member: {},
			audience: [],
			speaker: {}
		}
	},

	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome', this.welcome);
		this.socket.on('joined', this.joined);
		this.socket.on('audience', this.updateAudience);
	},

	emit(eventName, payload) {
    this.socket.emit(eventName, payload);
	},

	connect() { //checks for existing socket connection and emits status accordingly

		var member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

		if (member) {
			this.emit('join', member);
		}

		this.setState({ status: 'connected' });
	},

	disconnect() {
		this.setState({ status: 'disconnected' });
	},

	welcome(serverState) {
		this.setState({ title: serverState.title });
	},

	joined(member) {  //stores the joined socket
		sessionStorage.member = JSON.stringify(member);
		this.setState({ member: member });
	},

	updateAudience(newAudience) {
		this.setState({ audience: newAudience })
	},

	render() { // instead of passing individual states as with the header, we'll pass the whole state using {...this.state}
		return (
			<div>
				<Header title={this.state.title} status={this.state.status} />
				<RouteHandler emit={this.emit} {...this.state} />
			</div>
		);
	}

});

module.exports = APP;
