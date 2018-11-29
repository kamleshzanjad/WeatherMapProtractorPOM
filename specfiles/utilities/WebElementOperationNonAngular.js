"use strict";
exports.__esModule = true;
///npm cache clean --force
//declare var require: any;
var protractor_1 = require("protractor");
var Logger_1 = require("./Logger");
//var Q= require('q');
var WebElementOperationNonAngular = /** @class */ (function () {
    function WebElementOperationNonAngular() {
    }
    WebElementOperationNonAngular.prototype.isPageAngular = function (flag) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.isPageAngular");
        try {
            protractor_1.browser.ignoreSynchronisation = !flag;
            protractor_1.browser.waitForAngularEnabled(flag);
        }
        catch (Exception) {
            Logger_1.Logger.error("Exception Inside Method WebElementOperationNonAngular.isPageAngular \n " + Exception.getMessage);
        }
    };
    ;
    WebElementOperationNonAngular.prototype.openApplication = function (url) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.openApplication, with url '" + url + "'");
        protractor_1.browser.driver.get(url);
        protractor_1.browser.driver.manage().window().maximize();
    };
    ;
    WebElementOperationNonAngular.prototype.closeApplication = function () {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.closeApplication ");
        if (protractor_1.browser.driver != null) {
            protractor_1.browser.driver.close();
        }
        else {
            Logger_1.Logger.error("Exception Inside Method WebElementOperationNonAngular.closeApplication \n ");
        }
    };
    ;
    WebElementOperationNonAngular.prototype.browserWaitAngular = function () {
        protractor_1.browser.wait(function () {
            return protractor_1.browser.executeScript(' return || window.angular');
        }, 3000000);
    };
    ;
    WebElementOperationNonAngular.prototype.clickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.clickElement");
        var by = this.getLocatorString(locator);
        return protractor_1.browser.driver.findElement(by).click();
    };
    ;
    WebElementOperationNonAngular.prototype.mouseHover = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.mouseHover");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.browser.driver.findElement(by);
        protractor_1.browser.actions().mouseMove(ele).perform();
    };
    ;
    WebElementOperationNonAngular.prototype.doubleClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.doubleClickElement");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.browser.driver.findElement(by);
        protractor_1.browser.actions().doubleClick(ele).perform();
    };
    ;
    WebElementOperationNonAngular.prototype.rightClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.rightClickElement");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        var loc = ele.getLocation().then(function (location) {
            protractor_1.browser.actions().mouseMove(location).perform();
            protractor_1.browser.actions().click(protractor_1.protractor.Button.RIGHT).perform();
        });
    };
    ;
    WebElementOperationNonAngular.prototype.setElementText = function (locator, textValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.setElementText");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.browser.driver.findElement(by);
        return ele.clear().then(function () {
            return ele.sendKeys(textValue + "" + protractor_1.protractor.Key.ENTER);
        });
    };
    ;
    WebElementOperationNonAngular.prototype.getElementText = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.getElementText");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.browser.driver.findElement(by);
        return ele.getText().then(function (value) {
            return value;
        });
    };
    ;
    WebElementOperationNonAngular.prototype.getAllOptions = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getAllOptions");
        var by = this.getLocatorString(locator);
        //browser.driver.findElements(by).
        return protractor_1.element.all(by).map(function (elem) {
            //return browser.driver.findElements(by).map(function(elem){
            return elem.getText();
        });
    };
    ;
    WebElementOperationNonAngular.prototype.getElementAttributeValue = function (locator, attributeValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");
        var by = this.getLocatorString(locator);
        //let ele =  browser.driver.findElement(by);
        return protractor_1.browser.driver.findElement(by).getAttribute(attributeValue).then(function (value) {
            return value;
        });
    };
    ;
    WebElementOperationNonAngular.prototype.getLocatorString = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperationNonAngular.getLocatorString");
        var by;
        var arrString = locator.split("~");
        switch (arrString[0]) {
            case "xpath":
                by = protractor_1.By.xpath(arrString[1]);
                break;
            case "css":
                by = protractor_1.By.css(arrString[1]);
                break;
            case "default":
                break;
        }
        return by;
    };
    ;
    return WebElementOperationNonAngular;
}());
exports.WebElementOperationNonAngular = WebElementOperationNonAngular;
