var React = require('react');
var DayForecast = require('./DayForecast');

var ForecastList = React.createClass({
    render: function() {
        return (
            <div className="forecast-list row">
                {
                    this.props.data.map(function(forecast) {
                        return <DayForecast className="row" key={forecast.id} temp={forecast.temp}
                            minTemp={forecast.minTemp} maxTemp={forecast.maxTemp} weather={forecast.weather}
                            day={forecast.date} />
                    })
                }
            </div>
        )
    }
});

module.exports = ForecastList;
