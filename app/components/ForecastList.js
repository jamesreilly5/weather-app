var React = require('react');
var DayForecast = require('./DayForecast');

var ForecastList = React.createClass({
    render: function() {
        return (
            <ul className="forecast-list">
                {
                    this.props.data.map(function(forecast) {
                        return <DayForecast key={forecast.id} temp={forecast.temp}
                            minTemp={forecast.minTemp} maxTemp={forecast.maxTemp} weather={forecast.weather} />
                    })
                }
            </ul>
        )
    }
});

module.exports = ForecastList;
