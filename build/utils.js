"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataStringToDate = void 0;
const dataStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dataStringToDate = dataStringToDate;
