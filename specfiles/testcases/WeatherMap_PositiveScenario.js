"use strict";
exports.__esModule = true;
require('jasmine-spec-name-patch');
var Logger_1 = require("../utilities/Logger");
var FunctionsHomePage_1 = require("../pages/FunctionsHomePage");
var testData = require("../../resources/testDataFiles/testData.json");
describe("WeatherMapPositiveScenario_", function () {
    var objHomePage = new FunctionsHomePage_1.FunctionsHomePage();
    var TCID;
    beforeAll(function () {
        Logger_1.Logger.initClass("WeatherMapPositiveScenario");
    });
    afterAll(function () {
        Logger_1.Logger.termClass("WeatherMapPositiveScenario");
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
    it("TC_003_ Verify weather information is displayed when valid city name is entered ", function () {
        objHomePage.enterSearchCriteria(testData[TCID].searchValue);
        objHomePage.clickSearchButton().then(function () {
            objHomePage.getClimateInfo().then(function (value) {
                Logger_1.Logger.info("All climate informations is: " + value);
                console.log("All climate informations is: " + value);
                expect(value).toContain(testData[TCID].ExpectedValue, "Failed.Weather information is not dispalyed for valid city.");
            });
        });
    });
    it("TC_005_ Verify weather information is displayed for multiple city when partial city name is entered ", function () {
        objHomePage.enterSearchCriteria(testData[TCID].searchValue);
        objHomePage.clickSearchButton().then(function () {
            objHomePage.getClimateInfo_All().then(function (list) {
                //Logger.info("Number of citi return are: " +list.);
                Logger_1.Logger.info("All climate informations are: " + list.toString());
                expect(list.length).toBeGreaterThanOrEqual(1);
            });
        });
    });
});
