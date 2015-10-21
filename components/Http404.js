var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Http404 = React.createClass({
	render() {
	  return (
		  <div id="not-found">
		    <h1>Error 404: Document Not Found</h1>
			  <p>It looks like you are trying to access something that doesn't exist!
			      Perhaps you were looking for one of these: </p>

			  <Link to="/">Join as Audience</Link>
			  <Link to="/speaker">Start the presentation</Link>
			  <Link to="/board">View the board</Link>
		  </div>
	  );
	}
});

module.exports = Http404;