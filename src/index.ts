import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader'

//Create an object that satisfies the data reader interface
const footballReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the datareader interface
const matchReader = new MatchReader(footballReader)
matchReader.load();
let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`)