"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtrmlReport_1 = require("./reportTargets/HtrmlReport");
//Create an object that satisfies the data reader interface
const footballReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader_1.MatchReader(footballReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new HtrmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
