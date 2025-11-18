console.log("KG Coding is the best");

const fs = require("fs");


fs.writeFile("output.text","Writing File",(err)=> {
  if(err) console.log("Error occurred");
  else console.log("File Writtern Successfully");
})


let a = 10;
let b = 5;
let sum = a+b;
let product = a*b;
