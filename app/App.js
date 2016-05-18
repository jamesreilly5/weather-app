var React = require('react');
var api = require('./ApiClient');
var JsonParser = require('./JsonParser');
var ForecastList = require('./components/ForecastList');
var TodaysForecast = require('./components/TodaysForecast');

// In a proper deployment situation these credentials would be pulled down
// from a config in an S3 bucket. Hard-coded for the purpose of this exercise.
var API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast',
	API_KEY = '4b8be73b21f0c708ebffe24692c4121b',
	LOCATION = 'dublin'


var App = React.createClass({

	getInitialState: function(){
		return {response: null };
	},

	componentWillMount: function() {
		var self = this;
		this.setState({response: undefined});
		api.retrieveWeatherData(
			API_ENDPOINT + '?q=' + LOCATION + ',us&units=metric&mode=json&appid=' + API_KEY,
			null,
			function(data) {
				self.setState({
				    response: JsonParser.parse(data.text)
				});
			}
		)
	},

	render: function() {
		if ( !this.state.response ) {
			return <div>The response it not here yet!</div>
		}
		var weatherData = this.state.response.days,
			todaysData = weatherData.shift();
		return (
			<div>
				<TodaysForecast key={todaysData.id} temp={todaysData.temp}
					minTemp={todaysData.minTemp} maxTemp={todaysData.maxTemp}
					weather={todaysData.weather} city={this.state.response.city} />
				<ForecastList data={weatherData}/>
			</div>
		)
	}

});

module.exports = App;
