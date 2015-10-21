var React = require('react');

var Header = React.createClass({

	propTypes: {
		title: React.PropTypes.string.isRequired  //Requiring title to be present
	},

	render() { //Adding dynamic title
		return (
			<header>
				<h1>{this.props.title}</h1>
			</header>
		);
	}
});

module.exports = Header;