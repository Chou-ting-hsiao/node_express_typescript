"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readchk = function (res, err, data) {
    if (err) {
        res.sendStatus(500);
        return false;
    }
    if (!data.length) {
        res.sendStatus(404);
        return false;
    }
    return true;
};
exports.readchk = readchk;
