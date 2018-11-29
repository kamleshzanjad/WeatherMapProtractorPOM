require('jasmine-spec-name-patch');
import { Logger as logger} from '../utilities/Logger';
import {FunctionsHomePage} from '../pages/FunctionsHomePage';
var testData = require("../../resources/testDataFiles/testData.json");

describe("WeatherMapUIValidation_", function(){
	
	let objHomePage= new FunctionsHomePage();
		let TCID: string;
	
	beforeAll(function(){
		logger.initClass("WeatherMapUIValidation");		
	}); 
	afterAll(function(){
		logger.termClass("WeatherMapUIValidation");		
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
	it("TC_001_ Verify that searchtext box has default value and search button is highlighed with color ", function(){		
		expect(objHomePage.getDefaultValueinSearchBox()).toContain(testData[TCID].defaultText,
			 "Failed. searchtext box is not showing default value. ")	;

	}); 

	it("TC_004_ Verify that title text has particular width annd height ", function(){
		
		expect(objHomePage.getWidthOfTile()).toContain(testData[TCID].width,
			"Failed. Title width is different ")	;

			expect(objHomePage.getHeightOfTile()).toContain(testData[TCID].heigth,
				"Failed.  title height is different ")	;
				
	}); 
	
	
}); 