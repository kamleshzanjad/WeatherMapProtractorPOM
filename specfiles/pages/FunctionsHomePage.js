"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var utl = require('util');
var path = require('path');
//var baseDir= (path.dirName('require.main.filename).split("node_modules"))[0];
//let  configData=require('../../../Resources/configData.json');
var PropertiesReader = require('../../node_modules/properties-reader');
// let propertiesFile = path.join(baseDir, 'Resources/HomePage.properties');
// var objProperties = PropertiesReader(propertiesFile);
var objProperties = PropertiesReader('././resources/propertiesFiles/HomePage.properties');
var appData = require("../../resources/appConfig.json");
var Logger_1 = require("../utilities/Logger");
var WebElementOperationNonAngular_1 = require("../utilities/WebElementOperationNonAngular");
var FunctionsHomePage = /** @class */ (function (_super) {
    __extends(FunctionsHomePage, _super);
    function FunctionsHomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FunctionsHomePage.prototype.getMapValue = function (key) {
        return objProperties.get(key);
    };
    FunctionsHomePage.prototype.navigateToApplication = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.navigateToApplication ");
        var url = appData.url;
        this.openApplication(url);
    };
    ;
    FunctionsHomePage.prototype.enterSearchCriteria = function (searchValue) {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.enterSearchCriteria ");
        this.setElementText(this.getMapValue("SEARCHBOX"), searchValue);
    };
    ;
    FunctionsHomePage.prototype.clickSearchButton = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.clickSearchButton ");
        return this.clickElement(this.getMapValue("SEARCHBUTTON"));
    };
    ;
    FunctionsHomePage.prototype.getAlertMessage = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getAlertMessage ");
        return this.getElementText(this.getMapValue("ALERTMESSAGE"));
    };
    ;
    FunctionsHomePage.prototype.getClimateInfo = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getClimateInfo ");
        return this.getElementText(this.getMapValue("CLIMATE_INFORMATION"));
    };
    ;
    FunctionsHomePage.prototype.getClimateInfo_All = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getClimateInfo_All ");
        return this.getAllOptions(this.getMapValue("CLIMATE_INFORMATION_LIST"));
    };
    ;
    FunctionsHomePage.prototype.getDefaultValueinSearchBox = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getDefaultValueinSearchBox ");
        return this.getElementAttributeValue(this.getMapValue("SEARCHBOX"), "placeholder");
    };
    ;
    FunctionsHomePage.prototype.getWidthOfTile = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getWidthOfTile ");
        return this.getElementAttributeValue(this.getMapValue("title"), "width");
    };
    ;
    FunctionsHomePage.prototype.getHeightOfTile = function () {
        Logger_1.Logger.debug("Inside Method FunctionsHomePage.getHeightOfTile ");
        return this.getElementAttributeValue(this.getMapValue("title"), "height");
    };
    ;
    return FunctionsHomePage;
}(WebElementOperationNonAngular_1.WebElementOperationNonAngular));
exports.FunctionsHomePage = FunctionsHomePage;
