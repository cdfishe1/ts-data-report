import { MatchReader } from './MatchReader';
import { Summary } from './Summary';


//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAnalsyisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches)