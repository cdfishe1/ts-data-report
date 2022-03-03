import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const football = new CsvFileReader('football.csv');
football.read();
console.log(football.data[0])

let manUnitedWins = 0;

for (let match of football.data) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

// console.log(`Man United won ${manUnitedWins} games`)