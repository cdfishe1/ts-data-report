import { dataStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
    read(): void;
    data: string[][];
}

export class MatchReader {
    constructor(public reader: DataReader){};

    matches: MatchData[] = [];

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dataStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult, //<-- Type assertion
                    row[6]
                ]
            });
    }

    

}