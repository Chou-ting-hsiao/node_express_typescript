"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var conf_1 = require("./conf");
var passwdCrypto = function (req, res, next) {
    if (req.body.password) {
        req.body.password = crypto.createHash('md5')
            .update(req.body.password + conf_1.config.salt)
            .digest('hex');
    }
    next();
};
exports.passwdCrypto = passwdCrypto;
