var parseDay = function(dayForecast, index) {
    // Making the assumption that these values are always provided
    return {
        id: index,
        temp: dayForecast.main.temp,
        maxTemp: dayForecast.main.temp_max,
        minTemp: dayForecast.main.temp_min,
        weather: weatherMap[dayForecast.weather[0].description],
        date: days[(new Date(Date.parse(dayForecast.dt_txt))).getDay()]
    };
};

var weatherMap = {
    'clear sky' : 'sun-o'
};

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

module.exports = {
    parse: function(data) {
        json = JSON.parse(data),
        model = {
            city: json.city.name,
            days: []
        };

        // Current requested functionality is 5 days so don't parse the rest
        for(var i=0; i<5; i++) {
            dayForecast = parseDay(json.list[i], i);
            model.days.push(dayForecast);
        }

        return model;
    }
};
