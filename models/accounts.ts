import * as fs from 'fs';


let items=(  callback: (err: NodeJS.ErrnoException | null, data: string) => void)=> {
      fs.readFile( __dirname + "/" + "users.json", 'utf8', callback);
};

let write=(data:string,callback: (err: NodeJS.ErrnoException | null) => void)=>{
      fs.writeFile( __dirname + "/" + "users.json",data,'utf8', callback);
};


export {items,write};