const http = require("http");
const express = require("express");    

const app = express();

app.get("/", (req, res) => {
  return res.end("Hello from Home Page")
});

app.get("/about", (req, res) => {
  return res.end("Hello from Home Page")
});


// const myServer = http.createServer(app);
// myServer.listen(5000, () => console.log("Server Started"));

app.listen(5000, () => console.log("Server Started"));