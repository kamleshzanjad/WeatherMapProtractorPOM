require('jasmine-spec-name-patch');
import { Logger as logger, Logger} from '../utilities/Logger';
import {FunctionsHomePage} from '../pages/FunctionsHomePage';
var testData = require("../../resources/testDataFiles/testData.json");

describe("WeatherMapPositiveScenario_", function(){
	
	let objHomePage= new FunctionsHomePage();
		let TCID: string;
	
	beforeAll(function(){
		logger.initClass("WeatherMapPositiveScenario");		
	}); 
	afterAll(function(){
		logger.termClass("WeatherMapPositiveScenario");		
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
		
	it("TC_003_ Verify weather information is displayed when valid city name is entered ", function(){		
		objHomePage.enterSearchCriteria(testData[TCID].searchValue);
		objHomePage.clickSearchButton().then(()=>{
			objHomePage.getClimateInfo().then(function(value){
				Logger.info("All climate informations is: " + value);
				console.log("All climate informations is: " + value);
				expect(value).toContain(testData[TCID].ExpectedValue, "Failed.Weather information is not dispalyed for valid city.")
			});

            
		});	
		
	}); 

	it("TC_005_ Verify weather information is displayed for multiple city when partial city name is entered ", function(){		
		objHomePage.enterSearchCriteria(testData[TCID].searchValue);
		objHomePage.clickSearchButton().then(()=>{
			objHomePage.getClimateInfo_All().then(function(list){
				//Logger.info("Number of citi return are: " +list.);
				Logger.info("All climate informations are: " +list.toString());
				expect(list.length).toBeGreaterThanOrEqual(1);
			});
			
		});	
		
	}); 
	
}); 