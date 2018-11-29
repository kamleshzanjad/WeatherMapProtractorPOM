
//declare var require: any

var util= require('util');
var winston = require('winston');

let timestamp = function(){
	let d= new Date();
	return ("0" + d.getDay()).slice(-2) +":" + ("0" + (1+d.getMonth())).slice(-2) +":"+
	d.getFullYear() + "_" +d.getHours()+""+ d.getMinutes()+""+ d.getSeconds();	
};

export class Logger{
	
	static readonly currentTimeStamp = new Date().toISOString()
										.slice(0,19).replace(/[-|:]/g, "");
										
	static readonly logger= new (winston.Logger)({
		level:'silly',
		transports:[
		   new (winston.transports.Console)({
			   timestamp: timestamp			   
			   /* , colorise: true  */
		   }),
		   new (winston.transports.File)({
			   timestamp: timestamp
				, filename: './logfiles/testlog_' + Logger.currentTimeStamp +'.log'			   
			   /* , colorise: true  */
			   , json: false 
			   , prettyPrint: true
		   })		
		]		
	});  /*end of logger */
	
	static debug(message:string): void 	{
		this.logger.debug(message);   
	};
	static info(message:string): void {
		this.logger.info(message);   
	};	
	static error(message:string): void {
		this.logger.error(message);   
	};
	
	static initClass(message:string): void {		
		this.logger.info("Starting Test script excution for class: " +message);  
	};
	static initMethod(message:string): void {		 	
		this.logger.info("Starting Test script excution for method:  "+message); 
		 
	};
	static termClass(message:string): void {		 	
		this.logger.info("Completed Test script excution for class: " +message); 
		this.logger.info("------------------------------------------------ " );  
		this.logger.info("------------------------------------------------ " ); 
	};
	static termMethod(message:string): void {		 	
		this.logger.info("Completed Test script excution for method: " +message); 
		this.logger.info("------------------------------------------------ " ); 
		
	};
	
	
}
