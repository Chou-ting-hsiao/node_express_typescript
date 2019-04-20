import * as express from 'express';

let readchk=(res:express.Response,err: NodeJS.ErrnoException | null, data: string):boolean=>{

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

export{readchk};
