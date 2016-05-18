var DisplayUtils = require('./../app/DisplayUtils.js');

describe("DisplayUtils", function() {

    describe("getIconStyle", function() {
        it("returns the correct selectors for a given weather description", function() {
            expect(DisplayUtils.getIconStyle('clear sky')).toEqual('sun-o');
        });
    });

    describe("getDay", function() {
        it("returns the day for a given string date", function() {
            expect(DisplayUtils.getDay('2016-05-18 00:00:00')).toEqual('Thursday');
        });
    });

});
