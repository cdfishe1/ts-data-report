import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader'
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtrmlReport';

//Create an object that satisfies the data reader interface
const footballReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader(footballReader)
matchReader.load();

const summary = Summary.winsAnalsyisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches)