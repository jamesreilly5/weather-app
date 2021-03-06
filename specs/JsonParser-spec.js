var JsonParser = require('./../app/JsonParser.js');

describe("ApiClient", function() {

    describe("parse", function() {
        var validResponseData = JSON.stringify({
            city: { name: 'Dublin' },
            list: [
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'clear' }], dt_txt: "2016-05-18 00:00:00" },
                { main: { temp: '2.1', temp_min: '2', temp_max: '2.2'}, weather: [{ description: 'rain' }], dt_txt: "2016-05-19 00:00:00" },
                { main: { temp: '3.1', temp_min: '3', temp_max: '3.2'}, weather: [{ description: 'clear' }], dt_txt: "2016-05-20 00:00:00" },
                { main: { temp: '4.1', temp_min: '4', temp_max: '4.2'}, weather: [{ description: 'sun' }], dt_txt: "2016-05-21 00:00:00" },
                { main: { temp: '5.1', temp_min: '5', temp_max: '5.2'}, weather: [{ description: 'clear' }], dt_txt: "2016-05-22 00:00:00" }
            ]
        });
        var expectedOutput = {
            city: 'Dublin',
            days: [
                { id: 0, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'clear', date: '2016-05-18 00:00:00' },
                { id: 1, temp: '2.1', maxTemp: '2.2', minTemp: '2', weather: 'rain', date: '2016-05-19 00:00:00' },
                { id: 2, temp: '3.1', maxTemp: '3.2', minTemp: '3', weather: 'clear', date: '2016-05-20 00:00:00' },
                { id: 3, temp: '4.1', maxTemp: '4.2', minTemp: '4', weather: 'sun', date: '2016-05-21 00:00:00' },
                { id: 4, temp: '5.1', maxTemp: '5.2', minTemp: '5', weather: 'clear', date: '2016-05-22 00:00:00' }
            ]
        };

        describe("when valid data is supplied", function() {
            it("parses the expected output", function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });
    });

});
