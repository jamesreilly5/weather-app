var weatherMap = {
    'clear sky' : 'sun-o'
};

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

module.exports = {
    getIconStyle: function(weatherDescription) {
        return weatherMap[weatherDescription];
    },

    getDay: function(dateString) {
        var date = new Date(Date.parse(dateString));
        return days[date.getDay()];
    }
};
