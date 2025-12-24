
const fs = require('fs');
const os = require("os");

console.log(os.cpus().length);


// Sync..... file 
// create file 

fs.writeFileSync("./test.txt","Hey There");
// a syncrosh
fs.writeFile("./test.txt","Hey There", "Hello World",(err)=>{})


   // Blocking...
   // console.log("1");
   // const result = fs.readFileSync("context.txt", "utf-8");

   // console.log(result);
   // console.log("2");

   // None blocking 

   console.log("1");
   fs.readFile("contacts.txt", "utf-8", (err, result)=>{
      console.log(result);
   });

   console.log("2");





