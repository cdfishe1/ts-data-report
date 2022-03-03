"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = require("fs");
const utils_1 = require("./utils");
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
    mapRow(row) {
        return [
            (0, utils_1.dataStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.CsvFileReader = CsvFileReader;
