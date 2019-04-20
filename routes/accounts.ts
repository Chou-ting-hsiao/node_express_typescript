import * as express from 'express';
import * as accounts from '../models/accounts';
import * as utility from '../routes/utility';


let router = express.Router();

router.route('/')
.get((req:express.Request, res:express.Response)=> {
        accounts.items((err, data)=> {
           
        if(!utility.readchk(res,err,data)){
            return;
        }
            
            res.end(data);
        });
})
.post((req:express.Request, res:express.Response)=> {
    console.log('post');
    accounts.items((err, data)=> {
         
        if(!utility.readchk(res,err,data)){
            return;
        }

        var ndata=JSON.parse(data);

        ndata["user"].push(req.body);

        console.log(req.body);

        accounts.write(JSON.stringify(ndata,null,2),function (err) {
            if (err) {
                res.sendStatus(500);
                return console.error(err);
            }

            res.status(201).json('add complete!');
        });


      });

});

router.route('/:id')
.get((req:express.Request, res:express.Response)=>{
        accounts.items((err, data)=> {

            if(!utility.readchk(res,err,data)){
                return;
            }
            
            var ndata=JSON.parse(data);

            res.end(JSON.stringify( ndata["user"].find((item:any) => item.id ==req.params.id)) );
        });
})
.delete((req:express.Request, res:express.Response)=> {
        accounts.items((err, data)=> {

            if(!utility.readchk(res,err,data)){
                return;
            }

             var ndata=JSON.parse(data);
          
            ndata["user"]=ndata["user"].filter((value:any)=>{
                    return value.id!=req.params.id;
            });
          

            accounts.write(JSON.stringify(ndata,null,2),function (err) {
                if (err) {
                    res.sendStatus(500);
                    return console.error(err);
                }

                res.status(201).json('delete complete!');
            });


      });

});

export{router};
