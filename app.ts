import * as functions from './functions';

import bodyparser = require('body-parser');
import express= require('express');

import {config} from './conf';
import {router} from './routes/accounts';

var app = express();


app.use(bodyparser.urlencoded({ extended: false }));

app.use(bodyparser.json());

app.use(functions.passwdCrypto);

app.use('/accounts', router);

app.listen(config, function () {
    console.log('app listening on port ' + config.port + '!');
});

//npm run tsc  -  --init
//npm run-script build
//node bin\app.js