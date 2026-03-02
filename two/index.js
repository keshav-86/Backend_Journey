const http = require("http");
const fs = require("fs");
const url = require("url");
// const myServer = http.createServer((req, res) => {
//   console.log("New Request Received");
//   res.end("Hello From Server");
// });


const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New Req. Received \n`
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case '/':
        res.end("HomePage");
      break
      case '/about':
        res.end("I am Keshav verma");
      break
      default:
        res.end("404 Not Found")
    }
  })
  
});

myServer.listen(8000,()=>console.log("Server Started")); 
 