import crypto = require('crypto');
import {Request,Response,NextFunction} from 'express';
import {config } from './conf';

let passwdCrypto= (req:Request, res:Response, next:NextFunction)=> {
        if (req.body.password) {
            req.body.password = crypto.createHash('md5')
                                .update(req.body.password + config.salt)
                                .digest('hex');
        }

        next();
};

export {passwdCrypto};