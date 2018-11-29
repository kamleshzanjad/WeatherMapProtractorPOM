require('jasmine-spec-name-patch');
import { Logger as logger} from '../utilities/Logger';
import {FunctionsHomePage} from '../pages/FunctionsHomePage';
var testData = require("../../resources/testDataFiles/testData.json");

describe("WeatherMapNegativeScenario_", function(){
	
	let objHomePage= new FunctionsHomePage();
		let TCID: string;
	
	beforeAll(function(){
		logger.initClass("WeatherMapNegativeScenario");		
	}); 
	afterAll(function(){
		logger.termClass("WeatherMapNegativeScenario");		
	}); 

	afterEach(function(){
		logger.termMethod(this.fullName.split("_")[3]);		
	}); 
	
	beforeEach(function(){
		logger.initMethod(this.fullName.split("_")[3]);
		TCID=this.fullName.split("_")[2];			
		objHomePage.isPageAngular(false);
		objHomePage.navigateToApplication();
	}); 
	
	
	
	it("TC_002_ Verify message'Not found' is displayed when invalid city name is entered ", function(){		
		objHomePage.enterSearchCriteria(testData[TCID].searchValue);
		objHomePage.clickSearchButton().then(()=>{
			objHomePage.getAlertMessage().then(function(value){
				//Logger.info("All climate informations is: " + value);
				console.log("All climate informations is: " + value);
				expect(value).toContain(testData[TCID].ExpectedValue, "Failed. message'Not found' is displayed when invalid city name is entered. ");
			});

            
		});
		
	}); 
	

	
}); 