"use strict";
exports.__esModule = true;
require('jasmine-spec-name-patch');
var Logger_1 = require("../utilities/Logger");
var FunctionsHomePage_1 = require("../pages/FunctionsHomePage");
var testData = require("../../resources/testDataFiles/testData.json");
describe("WeatherMapNegativeScenario_", function () {
    var objHomePage = new FunctionsHomePage_1.FunctionsHomePage();
    var TCID;
    beforeAll(function () {
        Logger_1.Logger.initClass("WeatherMapNegativeScenario");
    });
    afterAll(function () {
        Logger_1.Logger.termClass("WeatherMapNegativeScenario");
    });
    afterEach(function () {
        Logger_1.Logger.termMethod(this.fullName.split("_")[3]);
    });
    beforeEach(function () {
        Logger_1.Logger.initMethod(this.fullName.split("_")[3]);
        TCID = this.fullName.split("_")[2];
        objHomePage.isPageAngular(false);
        objHomePage.navigateToApplication();
    });
    it("TC_002_ Verify message'Not found' is displayed when invalid city name is entered ", function () {
        objHomePage.enterSearchCriteria(testData[TCID].searchValue);
        objHomePage.clickSearchButton().then(function () {
            objHomePage.getAlertMessage().then(function (value) {
                //Logger.info("All climate informations is: " + value);
                console.log("All climate informations is: " + value);
                expect(value).toContain(testData[TCID].ExpectedValue, "Failed. message'Not found' is displayed when invalid city name is entered. ");
            });
        });
    });
});
