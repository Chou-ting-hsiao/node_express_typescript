"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var functions = __importStar(require("./functions"));
var bodyparser = require("body-parser");
var express = require("express");
var conf_1 = require("./conf");
var accounts_1 = require("./routes/accounts");
var app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(functions.passwdCrypto);
app.use('/accounts', accounts_1.router);
app.listen(conf_1.config, function () {
    console.log('app listening on port ' + conf_1.config.port + '!');
});
//npm run tsc  -  --init
//npm run-script build
//node bin\app.js
