// setting up a server on localhost:3000

const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");
const MyEmitter = new EventEmitter();

//Add an event emitter
MyEmitter.on("event", () => {
  console.log("an event occurred!");
});
MyEmitter.emit("event");

//Add a 'keydown' event
MyEmitter.on("keydown", () => {
  console.log("keydown");
});
MyEmitter.emit("keydown");

// Add an error event
MyEmitter.on("error", (err) => {
  console.log(err);
});
MyEmitter.emit("error", "Something went wrong");
console.log("Listeners for 'error':", MyEmitter.listeners("error"));

// Add a listeners count
MyEmitter.on("listeners", (num) => {
  console.log(`There are ${num} listeners now.`);
});
MyEmitter.emit("listeners", MyEmitter.listenerCount("event"));

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  //res.write("Hello, You are connected!!");
  //res.end();
  // console.log(req);
  // console.log(req.url, req.method);
  // set header content type
  res.setHeader("Content-Type", "text/html");

  // setting up basic routing (routes) with status code
  let path = "./views" + req.url;
  if (req.url === "/") {
    path = "./views/index.html";
  } else if (req.url === "/style.css") {
    path = "./views/style.css";
    res.setHeader("Content-Type", "text/css");
  }

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      console.log(req.url);
      console.log("index is working");
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      console.log(req.url);
      console.log("about is working");
      break;
    case "/products":
      path += "products.html";
      res.statusCode = 200;
      console.log(req.url);
      console.log(" products is working but not the images");
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      console.log(req.url);
      console.log("contact is working");
      break;
    case "/subscribe":
      path += "subscribe.html";
      res.statusCode = 200;
      console.log(req.url);
      console.log("subscribe is working");
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      console.log(req.url);
      console.log("404 is working");
      MyEmitter.emit("error", "Something went wrong");
      break;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

//get the server to listen for requests
server.listen(3000, "localhost", () => {
  console.log(
    "Success! Server is running and listening for requests on port 3000"
  );
});
