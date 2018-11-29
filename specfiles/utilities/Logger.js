"use strict";
//declare var require: any
exports.__esModule = true;
var util = require('util');
var winston = require('winston');
var timestamp = function () {
    var d = new Date();
    return ("0" + d.getDay()).slice(-2) + ":" + ("0" + (1 + d.getMonth())).slice(-2) + ":" +
        d.getFullYear() + "_" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds();
};
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.debug = function (message) {
        this.logger.debug(message);
    };
    ;
    Logger.info = function (message) {
        this.logger.info(message);
    };
    ;
    Logger.error = function (message) {
        this.logger.error(message);
    };
    ;
    Logger.initClass = function (message) {
        this.logger.info("Starting Test script excution for class: " + message);
    };
    ;
    Logger.initMethod = function (message) {
        this.logger.info("Starting Test script excution for method:  " + message);
    };
    ;
    Logger.termClass = function (message) {
        this.logger.info("Completed Test script excution for class: " + message);
        this.logger.info("------------------------------------------------ ");
        this.logger.info("------------------------------------------------ ");
    };
    ;
    Logger.termMethod = function (message) {
        this.logger.info("Completed Test script excution for method: " + message);
        this.logger.info("------------------------------------------------ ");
    };
    ;
    Logger.currentTimeStamp = new Date().toISOString()
        .slice(0, 19).replace(/[-|:]/g, "");
    Logger.logger = new (winston.Logger)({
        level: 'silly',
        transports: [
            new (winston.transports.Console)({
                timestamp: timestamp
                /* , colorise: true  */
            }),
            new (winston.transports.File)({
                timestamp: timestamp,
                filename: './logfiles/testlog_' + Logger.currentTimeStamp + '.log'
                /* , colorise: true  */
                ,
                json: false,
                prettyPrint: true
            })
        ]
    }); /*end of logger */
    return Logger;
}());
exports.Logger = Logger;
