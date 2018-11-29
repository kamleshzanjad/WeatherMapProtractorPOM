///npm cache clean --force
//declare var require: any;
import {protractor, by, By, $, $$,  browser, element} from '../../node_modules/protractor';
import {Logger} from './Logger';
//var Q= require('q');


export class WebElementOperation{
	
	public isPageAngular(flag:boolean): void{
		Logger.debug("Inside Method WebElementOperation.isPageAngular");		
		try{
			browser.ignoreSynchronisation =!flag;
			browser.waitForAngularEnabled(flag);			
		}catch(Exception){
			Logger.error("Exception Inside Method WebElementOperation.isPageAngular \n " +Exception.getMessage);
		}	
	};
	
	protected openApplication(url:string): void{
		Logger.debug("Inside Method WebElementOperation.navApplication, with url '" + url +"'");
		browser.get(url);
		browser.manage().window().maximize();		
	};
	
	protected closeApplication(): void{
		Logger.debug("Inside Method WebElementOperation.closeApplication ");
		if(browser!=null) {
			browser.close();			
		}else{
			Logger.error("Exception Inside Method WebElementOperation.closeApplication \n ");
		}
	};
	
	
	protected browserWaitAngular(){
		browser.wait(function(){
			return browser.executeScript(' return || window.angular');			
		}, 3000000);		
	};
	
	protected clickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.clickElement");		
		let by = this.getLocatorString(locator);
		return element(by).click();		
	};
	protected mouseHover(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.mouseHover");			
		let by = this.getLocatorString(locator);		
		let ele = element(by);
		browser.actions().mouseMove(ele).perform();		
	};
	
	protected doubleClickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.doubleClickElement");		
		let by = this.getLocatorString(locator);
		let ele = element(by);
		browser.actions().doubleClick(ele).perform();		
	};
	
	protected rightClickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.rightClickElement");		
		let by = this.getLocatorString(locator);
		let ele = element(by);
		let loc=ele.getLocation().then( function(location){
			browser.actions().mouseMove(location).perform();	
		    browser.actions().click(protractor.Button.RIGHT).perform();
		});		
	};
	
	protected setElementText(locator:string, textValue:string):any{
		Logger.debug("Inside Method WebElementOperation.setElementText");	
		let by = this.getLocatorString(locator);
		let ele = element(by);
		return ele.clear().then(function() {
			return ele.sendKeys( textValue + "" + protractor.Key.ENTER);
		});		
	};
	
	protected getElementText(locator:string):any{
		Logger.debug("Inside Method WebElementOperation.getElementText");	
		let by = this.getLocatorString(locator);
		let ele = element(by);
		return ele.getText().then(function(value) {
			return value;
		});		
	};
	
	protected getElementAttributeValue(locator:string, attributeValue):any{
		Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");	
		let by = this.getLocatorString(locator);
		let ele = element(by);
		return ele.getAttributeValue(attributeValue).then(function(value) {
			return value;
		});		
	};
	
	
	private getLocatorString(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.getLocatorString");	
		let by:any;			
		let arrString = locator.split("~");		
		switch( arrString[0]){
			case "xpath":
				by = By.xpath(arrString[1]);
				break;
			case "css":
				by = By.css(arrString[1]);
				break;
			case "default":
				break;
			
		}		
		return by;	
	};
	
	protected isElementDisplayed(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.isElementDisplayed");
		let by = this.getLocatorString(locator);
		let ele = element(by);	
        return ele.isDisplayed().then(function(flag){
            return flag;
		});		
	};
	
	protected isElementEnabled(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.isElementEnabled");
		let by = this.getLocatorString(locator);
		let ele = element(by);	
        return ele.isEnabled().then(function(flag){
            return flag;
		});		
	};
	
	protected isElementSelected(locator:string): any{
		Logger.debug("Inside Method WebElementOperation.isElementSelected");
		let by = this.getLocatorString(locator);
		let ele = element(by);	
        return ele.isSelected().then(function(flag){
            return flag;
		});		
	};
	
	
	
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
	
	protected selectByIndex(locator:string, optionIndex:number):void{
		Logger.debug("Inside Method WebElementOperation.selectByIndex");
		let by = this.getLocatorString(locator);
		let selectList = element(by);	
		selectList.findElements(By.tagName('option')).then (function(options){
			options[optionIndex].click();
		});		
	};
	
	
	protected getAllOptions(locator:string):any{
		Logger.debug("Inside Method WebElementOperation.getAllOptions");
		let by = this.getLocatorString(locator);
		return element.all(by).map(function(elem){
			return elem.getText();
		});		
	};
	
	protected getSelectedOption(locator:string):any{
		Logger.debug("Inside Method WebElementOperation.getSelectedOption");
		let by = this.getLocatorString(locator);	
		return 	element(by).$('option:checked').getText().then(function(value)	{
			return value;
			// return value.toString().replace(/\r?\n|\r|\n/g, "");
		});
	};
	
	
	protected getElementCount(locator:string):any{
		Logger.debug("Inside Method WebElementOperation.getElementCount");
		let by = this.getLocatorString(locator);		
		return element.all(by).count();
	};
	
	protected pressEnterKey():void{
		Logger.debug("Inside Method WebElementOperation.pressEnterKey");
		$('body').sendKeys(protractor.Key.ENTER);
	};
		
	
}

	
	
	