var React = require('react');
var FontAwesome = require('react-fontawesome');
var DisplayUtils = require('../DisplayUtils');

var TodaysForecast = React.createClass({
	render: function() {
		return (
            <div className='todays-forecast'>
                <div className='row title'>{ this.props.city }</div>
				<div className='row'>
					<FontAwesome className='col-md-2'
						name={ this.props.weather ? DisplayUtils.getIconStyle(this.props.weather) : 'question-circle-o' } size='5x'/>
					<div className='col-md-3'><h1>{ this.props.temp ? this.props.temp : '-' } &#8451;</h1></div>
				</div>
                <div className='row'>
                    <div className='col-md-2'><h2>Min: { this.props.minTemp ? this.props.minTemp : '-' } &#8451;</h2></div>
                    <div className='col-md-2'><h2>Max: { this.props.maxTemp ? this.props.maxTemp : '-' } &#8451;</h2></div>
                </div>

            </div>
		)
	}
});

module.exports = TodaysForecast;
