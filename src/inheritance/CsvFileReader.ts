//This version makes the file reader an abstract class and uses generics to pass types as needed.

import { readFileSync } from "fs";

export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public filename: string) {};
    abstract mapRow(row: string[]): T;

    read():void {
        this.data = readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
        .map((row: string): string[] => {
            return row.split(',')
        })
        .map(this.mapRow)
    }

    
}