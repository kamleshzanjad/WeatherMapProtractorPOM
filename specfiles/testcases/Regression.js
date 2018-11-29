"use strict";
exports.__esModule = true;
var util = require('util');
var Q = require('q');
var lodash = require('lodash');
require('jasmine-spec-name-patch');
var FunctionsHomePage_1 = require("../pages/FunctionsHomePage");
//import {FunctionsHomePage} from ('C:/Users/Public/Documents/protractor demo fr/AutomationTesting/specfiles/pages/FunctionsHomePage');
//import { FunctionsSearchPage} from '../pages/FunctionsSearchPage';
var testData = require("../../resources/testDataFiles/testData.json");
describe("ModuleName_", function () {
    var objHomePage = new FunctionsHomePage_1.FunctionsHomePage();
    var TCID;
    beforeAll(function () {
        //logger.initClass("ModuleName_");		
    }); /* beforeAll */
    afterAll(function () {
        //logger.termClass("ModuleName_");		
    }); /* afterAll */
    afterEach(function () {
        //logger.termMethod(this.fullName.split("_")[2]);		
    }); /* afterEach */
    beforeEach(function () {
        TCID = this.fullName.split("_")[2];
        objHomePage.isPageAngular(false);
        objHomePage.navigateToApplication();
        //objHomePage.isPageAngular(true);		
    }); /* beforeEach */
    xit("TC_001_ Verify that all labels are displayed on Homepage ", function () {
    }); /* it block TC_001_*/
    it("TC_002_ Verify message'Not found' is displayed when invalid city name is entered ", function () {
        objHomePage.enterSearchCriteria(testData[TCID].searchValue);
        objHomePage.clickSearchButton().then(function () {
            expect(expect(objHomePage.getAlertMessage())).toContain(testData[TCID].ExpectedValue, "Failed. message'Not found' is displayed when invalid city name is entered. ");
        });
    }); /* it block TC_002_*/
    it("TC_003_ Verify weather information is displayed when valid city name is entered ", function () {
        objHomePage.enterSearchCriteria(testData[TCID].searchValue);
        objHomePage.clickSearchButton().then(function () {
            expect(objHomePage.getClimateInfo()).toContain(testData[TCID].ExpectedValue, "Failed.Weather information is not dispalyed for valid city.");
        });
    }); /* it block TC_003_*/
}); /* describe block */
