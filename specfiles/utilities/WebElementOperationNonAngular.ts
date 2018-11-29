///npm cache clean --force
//declare var require: any;
import {protractor, by, By, $, $$,  browser, element} from 'protractor';
import {Logger} from './Logger';
//var Q= require('q');


export class WebElementOperationNonAngular{
	
	public isPageAngular(flag:boolean): void{
		Logger.debug("Inside Method WebElementOperationNonAngular.isPageAngular");		
		try{
			browser.ignoreSynchronisation =!flag;
			browser.waitForAngularEnabled(flag);			
		}catch(Exception){
			Logger.error("Exception Inside Method WebElementOperationNonAngular.isPageAngular \n " +Exception.getMessage);
		}	
	};
	
	protected openApplication(url:string): void{
		Logger.debug("Inside Method WebElementOperationNonAngular.openApplication, with url '" + url +"'");
		browser.driver.get(url);		
		browser.driver.manage().window().maximize();		
	};
	
	protected closeApplication(): void{
		Logger.debug("Inside Method WebElementOperationNonAngular.closeApplication ");
		if(browser.driver!=null) {
			browser.driver.close();			
		}else{
			Logger.error("Exception Inside Method WebElementOperationNonAngular.closeApplication \n ");
		}
	};
	
	
	protected browserWaitAngular(){
		browser.wait(function(){
			return browser.executeScript(' return || window.angular');			
		}, 3000000);		
	};
	
	protected clickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperationNonAngular.clickElement");		
		let by = this.getLocatorString(locator);
		return browser.driver.findElement(by).click();		
	};
	protected mouseHover(locator:string): any{
		Logger.debug("Inside Method WebElementOperationNonAngular.mouseHover");			
		let by = this.getLocatorString(locator);		
		let ele = browser.driver.findElement(by);
		browser.actions().mouseMove(ele).perform();		
	};
	
	protected doubleClickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperationNonAngular.doubleClickElement");		
		let by = this.getLocatorString(locator);
		let ele = browser.driver.findElement(by);
		browser.actions().doubleClick(ele).perform();		
	};
	
	protected rightClickElement(locator:string): any{
		Logger.debug("Inside Method WebElementOperationNonAngular.rightClickElement");		
		let by = this.getLocatorString(locator);
		let ele = element(by);
		let loc=ele.getLocation().then( function(location){
			browser.actions().mouseMove(location).perform();	
		    browser.actions().click(protractor.Button.RIGHT).perform();
		});		
	};
	
	protected setElementText(locator:string, textValue:string):any{
		Logger.debug("Inside Method WebElementOperationNonAngular.setElementText");	
		let by = this.getLocatorString(locator);
		let ele = browser.driver.findElement(by);
		return ele.clear().then(function() {
			return ele.sendKeys( textValue + "" + protractor.Key.ENTER);
		});		
	};
	
	protected getElementText(locator:string):any{
		Logger.debug("Inside Method WebElementOperationNonAngular.getElementText");	
		let by = this.getLocatorString(locator);
		let ele = browser.driver.findElement(by);
		return ele.getText().then(function(value) {
			return value;
		});		
	};

	protected getAllOptions(locator:string):any{
		Logger.debug("Inside Method WebElementOperation.getAllOptions");
		let by = this.getLocatorString(locator);

		//browser.driver.findElements(by).
		return element.all(by).map(function(elem){
		//return browser.driver.findElements(by).map(function(elem){
			return elem.getText();
		});		
	};

	protected getElementAttributeValue(locator:string, attributeValue):any{
		Logger.debug("Inside Method WebElementOperation.getElementAttributeValue");	
		let by = this.getLocatorString(locator);
		//let ele =  browser.driver.findElement(by);
		return browser.driver.findElement(by).getAttribute(attributeValue).then(function(value) {
			return value;
		});		
	};
	
	
	private getLocatorString(locator:string): any{
		Logger.debug("Inside Method WebElementOperationNonAngular.getLocatorString");	
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
		
	
}

	
	
	