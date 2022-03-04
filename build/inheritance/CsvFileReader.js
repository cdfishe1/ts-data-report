"use strict";
//This version makes the file reader an abstract class and uses generics to pass types as needed.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = require("fs");
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    ;
    read() {
        this.data = (0, fs_1.readFileSync)(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
