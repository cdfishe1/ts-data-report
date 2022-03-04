import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader'

//Create an object that satisfies the data reader interface
const footballReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader(footballReader)
matchReader.load();
