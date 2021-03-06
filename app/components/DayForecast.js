var React = require('react');
var FontAwesome = require('react-fontawesome');
var DisplayUtils = require('../DisplayUtils');

var DayForecast = React.createClass({
	render: function() {
		return (
			<div className="col-md-3 col-sm-6 col-xs-12">
	            <div className='day-forecast '>
					<div className='row day'>{DisplayUtils.getDay(this.props.day)}</div>
					<div className='row'>
						<FontAwesome className='col-md-4'
							name={ this.props.weather ? DisplayUtils.getIconStyle(this.props.weather) : 'question-circle-o' } size='5x'/>
						<div className='col-md-8'><h1>{ this.props.temp ? this.props.temp : '-' } &#8451;</h1></div>
					</div>
	                <div><h2>Min: { this.props.minTemp ? this.props.minTemp : '-' } &#8451;</h2></div>
	                <div><h2>Max: { this.props.maxTemp ? this.props.maxTemp : '-' } &#8451;</h2></div>
	            </div>
			</div>
		)
	}
});

module.exports = DayForecast;
