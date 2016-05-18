var React = require('react');

var DayForecast = React.createClass({
	render: function() {
		return (
            <div className="day-forecast">
                <div>Weather: { this.props.weather ? this.props.weather : '?' }</div>
			    <div>Temp: { this.props.temp ? this.props.temp : '-' }</div>
                <div>Min: { this.props.minTemp ? this.props.minTemp : '-' }</div>
                <div>Max: { this.props.maxTemp ? this.props.maxTemp : '-' }</div>
            </div>
		)
	}
});

module.exports = DayForecast;
