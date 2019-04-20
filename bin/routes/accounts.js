"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var accounts = __importStar(require("../models/accounts"));
var utility = __importStar(require("../routes/utility"));
var router = express.Router();
exports.router = router;
router.route('/')
    .get(function (req, res) {
    accounts.items(function (err, data) {
        if (!utility.readchk(res, err, data)) {
            return;
        }
        res.end(data);
    });
})
    .post(function (req, res) {
    console.log('post');
    accounts.items(function (err, data) {
        if (!utility.readchk(res, err, data)) {
            return;
        }
        var ndata = JSON.parse(data);
        ndata["user"].push(req.body);
        console.log(req.body);
        accounts.write(JSON.stringify(ndata, null, 2), function (err) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            res.status(201).json('add complete!');
        });
    });
});
router.route('/:id')
    .get(function (req, res) {
    accounts.items(function (err, data) {
        if (!utility.readchk(res, err, data)) {
            return;
        }
        var ndata = JSON.parse(data);
        res.end(JSON.stringify(ndata["user"].find(function (item) { return item.id == req.params.id; })));
    });
})
    .delete(function (req, res) {
    accounts.items(function (err, data) {
        if (!utility.readchk(res, err, data)) {
            return;
        }
        var ndata = JSON.parse(data);
        ndata["user"] = ndata["user"].filter(function (value) {
            return value.id != req.params.id;
        });
        accounts.write(JSON.stringify(ndata, null, 2), function (err) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }
            res.status(201).json('delete complete!');
        });
    });
});
