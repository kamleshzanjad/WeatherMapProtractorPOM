
//'use strict;
declare var require: any;
var util =require('util');
var Q =require('q');
var lodash =require('lodash');
require('jasmine-spec-name-patch');
/*
set path =%path%; folderwhere node is present

npm install protractor -g
npm install typescript -g
npm install jasmine -g

npm install properties-reader
npm i jasmine-spec-name-patch

npm install @types/jasmine --save
npm install @types/node --save

check version
npm --version
node --version
protractor --version
tsc --version
*/

import {protractor, by, By, $, $$, element, browser} from 'protractor';
import { Logger} from '../utilities/Logger';
import {FunctionsHomePage} from '../pages/FunctionsHomePage';


//import {FunctionsHomePage} from ('C:/Users/Public/Documents/protractor demo fr/AutomationTesting/specfiles/pages/FunctionsHomePage');
//import { FunctionsSearchPage} from '../pages/FunctionsSearchPage';
var testData = require("../../resources/testDataFiles/testData.json");

describe("ModuleName_", function(){
	
	let objHomePage= new FunctionsHomePage();
		let TCID: string;
	
	beforeAll(function(){
		//logger.initClass("ModuleName_");		
	}); /* beforeAll */
	afterAll(function(){
		//logger.termClass("ModuleName_");		
	}); /* afterAll */
	afterEach(function(){
		//logger.termMethod(this.fullName.split("_")[2]);		
	}); /* afterEach */
	
	beforeEach(function(){
		TCID=this.fullName.split("_")[2];			
		objHomePage.isPageAngular(false);
		objHomePage.navigateToApplication();
				
		//objHomePage.isPageAngular(true);		
	}); /* beforeEach */
	
	
	xit("TC_001_ Verify that all labels are displayed on Homepage ", function(){		
				
	}); /* it block TC_001_*/
	
	it("TC_002_ Verify message'Not found' is displayed when invalid city name is entered ", function(){		
		objHomePage.enterSearchCriteria(testData[TCID].searchValue);
		objHomePage.clickSearchButton().then(()=>{
             expect(expect(objHomePage.getAlertMessage())).toContain(testData[TCID].ExpectedValue, "Failed. message'Not found' is displayed when invalid city name is entered. ")
		})
		
	}); /* it block TC_002_*/
	
	it("TC_003_ Verify weather information is displayed when valid city name is entered ", function(){		
		objHomePage.enterSearchCriteria(testData[TCID].searchValue);
		objHomePage.clickSearchButton().then(()=>{
            expect(objHomePage.getClimateInfo()).toContain(testData[TCID].ExpectedValue, "Failed.Weather information is not dispalyed for valid city.")
		})
		
		
	}); /* it block TC_003_*/
	
}); /* describe block */