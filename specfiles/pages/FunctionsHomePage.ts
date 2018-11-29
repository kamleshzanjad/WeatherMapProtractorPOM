var utl = require('util');
let path = require('path');
//var baseDir= (path.dirName('require.main.filename).split("node_modules"))[0];
//let  configData=require('../../../Resources/configData.json');
var PropertiesReader = require('../../node_modules/properties-reader');
// let propertiesFile = path.join(baseDir, 'Resources/HomePage.properties');
// var objProperties = PropertiesReader(propertiesFile);

var objProperties = PropertiesReader('././resources/propertiesFiles/HomePage.properties');
var appData = require("../../resources/appConfig.json");
import { Logger } from '../utilities/Logger';
import { WebElementOperationNonAngular } from '../utilities/WebElementOperationNonAngular';



export class FunctionsHomePage extends WebElementOperationNonAngular {
	private getMapValue(key: string): string {
		return objProperties.get(key);
	}

	public navigateToApplication(): void {
		Logger.debug("Inside Method FunctionsHomePage.navigateToApplication ");
		let url = appData.url;		
		this.openApplication(url);		
	};		
	
	public enterSearchCriteria(searchValue: string): void {
		Logger.debug("Inside Method FunctionsHomePage.enterSearchCriteria ");
		this.setElementText(this.getMapValue("SEARCHBOX"), searchValue);
	};

	public clickSearchButton(): any {
		Logger.debug("Inside Method FunctionsHomePage.clickSearchButton ");
		return this.clickElement(this.getMapValue("SEARCHBUTTON"));
	};

	public getAlertMessage(): any{		
		Logger.debug("Inside Method FunctionsHomePage.getAlertMessage ");
		return this.getElementText(this.getMapValue("ALERTMESSAGE"));
	};

	public getClimateInfo(): any{		
		Logger.debug("Inside Method FunctionsHomePage.getClimateInfo ");
		return this.getElementText(this.getMapValue("CLIMATE_INFORMATION"));
	};

	public getClimateInfo_All(): any{		
		Logger.debug("Inside Method FunctionsHomePage.getClimateInfo_All ");
		return this.getAllOptions(this.getMapValue("CLIMATE_INFORMATION_LIST"));
	};

	public getDefaultValueinSearchBox(): any {
		Logger.debug("Inside Method FunctionsHomePage.getDefaultValueinSearchBox ");
		return this.getElementAttributeValue(this.getMapValue("SEARCHBOX"), "placeholder");
	};

	public getWidthOfTile(): any {
		Logger.debug("Inside Method FunctionsHomePage.getWidthOfTile ");
		return this.getElementAttributeValue(this.getMapValue("title"), "width");
	};

	public getHeightOfTile(): any {
		Logger.debug("Inside Method FunctionsHomePage.getHeightOfTile ");
		return this.getElementAttributeValue(this.getMapValue("title"), "height");
	};
	





}