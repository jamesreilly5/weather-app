var JsonParser = require('./../app/JsonParser.js');

describe("ApiClient", function() {

    describe("parse", function() {
        var validResponseData = JSON.stringify({
            list: [
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] },
                { main: { temp: '1.1', temp_min: '1', temp_max: '1.2'}, weather: [{ description: 'Clear' }] }
            ]
        });
        var expectedOutput = {
            days: [
                { id: 0, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' },
                { id: 1, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' },
                { id: 2, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' },
                { id: 3, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' },
                { id: 4, temp: '1.1', maxTemp: '1.2', minTemp: '1', weather: 'Clear' }
            ]
        };

        describe("when valid data is supplied", function() {
            it("parses the expected output", function() {
                expect(JsonParser.parse(validResponseData)).toEqual(expectedOutput);
            });
        });
    });

});
