var React = require('react');
var api = require('./ApiClient')


var App = React.createClass({

	componentWillMount: function() {
		var self = this;
		this.setState({response: undefined});
		api.retrieveWeatherData(
			"http://api.randomuser.me/",
			null,
			function(data) {
				self.setState({
				    response: data.body.results[0].email
				});
			}
		)
	},

	render: function() {
		if ( !this.state.response ) {
			return <div>The response it not here yet!</div>
		}

		var response = this.state.response;
		return (
			<div>{response}</div>
		)
	}

});

module.exports = App;
