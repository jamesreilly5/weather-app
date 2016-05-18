var React = require('react');
var FontAwesome = require('react-fontawesome');

var DayForecast = React.createClass({
	render: function() {
		return (
            <div className='day-forecast col-md-2 col-xs-6'>
				<div className='row'>
					<FontAwesome className='col-md-6' name={ this.props.weather ? this.props.weather : 'question-circle-o' } size='5x'/>
					<div className='col-md-6'><h1>{ this.props.temp ? this.props.temp : '-' } &#8451;</h1></div>
				</div>
                <div><h2>Min: { this.props.minTemp ? this.props.minTemp : '-' } &#8451;</h2></div>
                <div><h2>Max: { this.props.maxTemp ? this.props.maxTemp : '-' } &#8451;</h2></div>
            </div>
		)
	}
});

module.exports = DayForecast;
