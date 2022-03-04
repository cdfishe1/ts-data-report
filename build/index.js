"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const Summary_1 = require("./Summary");
//Create an object that satisfies the data reader interface
const footballReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader_1.MatchReader(footballReader);
matchReader.load();
const summary = Summary_1.Summary.winsAnalsyisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
