"use strict";
exports.__esModule = true;
///npm cache clean --force
//declare var require: any;
var protractor_1 = require("../../node_modules/protractor");
var Logger_1 = require("./Logger");
//var Q= require('q');
var WebElementOperation = /** @class */ (function () {
    function WebElementOperation() {
    }
    WebElementOperation.prototype.isPageAngular = function (flag) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.isPageAngular");
        try {
            protractor_1.browser.ignoreSynchronisation = !flag;
            protractor_1.browser.waitForAngularEnabled(flag);
        }
        catch (Exception) {
            Logger_1.Logger.error("Exception Inside Method WebElementOperation.isPageAngular \n " + Exception.getMessage);
        }
    };
    ;
    WebElementOperation.prototype.openApplication = function (url) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.navApplication, with url '" + url + "'");
        protractor_1.browser.get(url);
        protractor_1.browser.manage().window().maximize();
    };
    ;
    WebElementOperation.prototype.closeApplication = function () {
        Logger_1.Logger.debug("Inside Method WebElementOperation.closeApplication ");
        if (protractor_1.browser != null) {
            protractor_1.browser.close();
        }
        else {
            Logger_1.Logger.error("Exception Inside Method WebElementOperation.closeApplication \n ");
        }
    };
    ;
    WebElementOperation.prototype.browserWaitAngular = function () {
        protractor_1.browser.wait(function () {
            return protractor_1.browser.executeScript(' return || window.angular');
        }, 3000000);
    };
    ;
    WebElementOperation.prototype.clickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.clickElement");
        var by = this.getLocatorString(locator);
        return protractor_1.element(by).click();
    };
    ;
    WebElementOperation.prototype.mouseHover = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.mouseHover");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        protractor_1.browser.actions().mouseMove(ele).perform();
    };
    ;
    WebElementOperation.prototype.doubleClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.doubleClickElement");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        protractor_1.browser.actions().doubleClick(ele).perform();
    };
    ;
    WebElementOperation.prototype.rightClickElement = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.rightClickElement");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        var loc = ele.getLocation().then(function (location) {
            protractor_1.browser.actions().mouseMove(location).perform();
            protractor_1.browser.actions().click(protractor_1.protractor.Button.RIGHT).perform();
        });
    };
    ;
    WebElementOperation.prototype.setElementText = function (locator, textValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.setElementText");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.clear().then(function () {
            return ele.sendKeys(textValue + "" + protractor_1.protractor.Key.ENTER);
        });
    };
    ;
    WebElementOperation.prototype.getElementText = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getElementText");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.getText().then(function (value) {
            return value;
        });
    };
    ;
    WebElementOperation.prototype.getElementAttributeValue = function (locator, attributeValue) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.getAttributeValue(attributeValue).then(function (value) {
            return value;
        });
    };
    ;
    WebElementOperation.prototype.getLocatorString = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getLocatorString");
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
    WebElementOperation.prototype.isElementDisplayed = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.isElementDisplayed");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.isDisplayed().then(function (flag) {
            return flag;
        });
    };
    ;
    WebElementOperation.prototype.isElementEnabled = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.isElementEnabled");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.isEnabled().then(function (flag) {
            return flag;
        });
    };
    ;
    WebElementOperation.prototype.isElementSelected = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.isElementSelected");
        var by = this.getLocatorString(locator);
        var ele = protractor_1.element(by);
        return ele.isSelected().then(function (flag) {
            return flag;
        });
    };
    ;
    /* below are common methods for select dropdown */
    // protected selectByValue(locator:string, byValue: string):void{		
    // 	Logger.debug("Inside Method WebElementOperation.selectByValue");
    // 	let by = this.getLocatorString(locator);
    // 	let selectList = element(by);	
    // 	let  desiredOption;
    // 	selectList.findElements(By.tagName('option')).then (function findMatchingOptions(options){
    // 		options.some(function(option){
    // 			option.getAttribute('value').then( function doesOptionMatch(attributeValue){
    // 				if ( byValue == attributeValue){
    // 					desiredOption = option;
    // 					return true;
    // 				}					  
    // 			});				
    // 		}); /* end of optionns.some  */			
    // 	}).
    // 	then(function clickOption(){
    // 		if(desiredOption){
    // 			desiredOption.click();
    // 		}
    // 	});		
    // };
    // protected selectByVisibleText(locator:string, byValue: string):void{		
    // 	Logger.debug("Inside Method WebElementOperation.selectByVisibleText");
    // 	let by = this.getLocatorString(locator);
    // 	let selectList = element(by);	
    // 	let  desiredOption;
    // 	selectList.findElements(By.tagName('option')).then (function findMatchingOptions(options){
    // 		options.some(function(option){
    // 			option.getText().then( function doesOptionMatch(attributeValue){
    // 				if ( byValue == attributeValue){
    // 					desiredOption = option;
    // 					return true;
    // 				}					  
    // 			});				
    // 		}); /* end of optionns.some  */			
    // 	}).
    // 	then(function clickOption(){
    // 		if(desiredOption){
    // 			desiredOption.click();
    // 		}
    // 	});		
    // };
    WebElementOperation.prototype.selectByIndex = function (locator, optionIndex) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.selectByIndex");
        var by = this.getLocatorString(locator);
        var selectList = protractor_1.element(by);
        selectList.findElements(protractor_1.By.tagName('option')).then(function (options) {
            options[optionIndex].click();
        });
    };
    ;
    WebElementOperation.prototype.getAllOptions = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getAllOptions");
        var by = this.getLocatorString(locator);
        return protractor_1.element.all(by).map(function (elem) {
            return elem.getText();
        });
    };
    ;
    WebElementOperation.prototype.getSelectedOption = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getSelectedOption");
        var by = this.getLocatorString(locator);
        return protractor_1.element(by).$('option:checked').getText().then(function (value) {
            return value;
            // return value.toString().replace(/\r?\n|\r|\n/g, "");
        });
    };
    ;
    WebElementOperation.prototype.getElementCount = function (locator) {
        Logger_1.Logger.debug("Inside Method WebElementOperation.getElementCount");
        var by = this.getLocatorString(locator);
        return protractor_1.element.all(by).count();
    };
    ;
    WebElementOperation.prototype.pressEnterKey = function () {
        Logger_1.Logger.debug("Inside Method WebElementOperation.pressEnterKey");
        protractor_1.$('body').sendKeys(protractor_1.protractor.Key.ENTER);
    };
    ;
    return WebElementOperation;
}());
exports.WebElementOperation = WebElementOperation;
