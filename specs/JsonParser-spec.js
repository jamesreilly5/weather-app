var JsonParser = require('./../app/JsonParser.js');

describe("ApiClient", function() {

    describe("parse", function() {
        var validResponseData = JSON.stringify({
            list: [
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '2.1', temp_min: '2', temp_max: '2.2'}, weather: [{ description: 'Rain' }] },
                { main: { temp: '3.1', temp_min: '3', temp_max: '3.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '4.1', temp_min: '4', temp_max: '4.2'}, weather: [{ description: 'Sunny' }] },
                { main: { temp: '5.1', temp_min: '5', temp_max: '5.2'}, weather: [{ description: 'Clear' }] }
            ]
        });
        var expectedOutput = {
            days: [
                { id: 0, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' },
                { id: 1, temp: '2.1', maxTemp: '2.2', minTemp: '2', weather: 'Rain' },
                { id: 2, temp: '3.1', maxTemp: '3.2', minTemp: '3', weather: 'Clear' },
                { id: 3, temp: '4.1', maxTemp: '4.2', minTemp: '4', weather: 'Sunny' },
                { id: 4, temp: '5.1', maxTemp: '5.2', minTemp: '5', weather: 'Clear' }
            ]
        };

        describe("when valid data is supplied", function() {
            it("parses the expected output", function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });
    });

});
