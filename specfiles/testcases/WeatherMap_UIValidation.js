"use strict";
exports.__esModule = true;
require('jasmine-spec-name-patch');
var Logger_1 = require("../utilities/Logger");
var FunctionsHomePage_1 = require("../pages/FunctionsHomePage");
var testData = require("../../resources/testDataFiles/testData.json");
describe("WeatherMapUIValidation_", function () {
    var objHomePage = new FunctionsHomePage_1.FunctionsHomePage();
    var TCID;
    beforeAll(function () {
        Logger_1.Logger.initClass("WeatherMapUIValidation");
    });
    afterAll(function () {
        Logger_1.Logger.termClass("WeatherMapUIValidation");
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
    it("TC_001_ Verify that searchtext box has default value and search button is highlighed with color ", function () {
        expect(objHomePage.getDefaultValueinSearchBox()).toContain(testData[TCID].defaultText, "Failed. searchtext box is not showing default value. ");
    });
    it("TC_004_ Verify that title text has particular width annd height ", function () {
        expect(objHomePage.getWidthOfTile()).toContain(testData[TCID].width, "Failed. Title width is different ");
        expect(objHomePage.getHeightOfTile()).toContain(testData[TCID].heigth, "Failed.  title height is different ");
    });
});
