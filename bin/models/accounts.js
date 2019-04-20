"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var items = function (callback) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', callback);
};
exports.items = items;
var write = function (data, callback) {
    fs.writeFile(__dirname + "/" + "users.json", data, 'utf8', callback);
};
exports.write = write;
