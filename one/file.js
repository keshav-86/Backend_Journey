const fs = require("fs");


// //  syn fun
// fs.writeFileSync("./test.txt", "Hello world");

// // async fun
// fs.writeFile("./test.txt", "Hello",(err)=>{} );

// const read = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(read);

// asyn kuch bhi return nhi krta h

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   }
//   else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt",`Hey There\n`);
 
// blocking and Non-Blocking

console.log("1");

const result = fs.readFileSync("contacts.txt", "utf-8");
console.log(result);

console.log(3);



console.log("1");
fs.readFile("contacts.txt", "utf-8", (err, result)=> {
  console.log(result);
}); 
console.log(3);


// default threadpoolsize=4
// Max? :8core cpu 8  