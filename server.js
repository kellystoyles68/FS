// setting up a server on localhost:3000

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/plain");
  //res.write("Hello, You are connected!!");
  //res.end();
  // console.log(req);
  // console.log(req.url, req.method);
  // set header content type
  res.setHeader("Content-Type", "text/html");

  // setting up basic routing (routes) with status code

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      console.log(req.url);
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      console.log(req.url);
      break;
    case "/products":
      path += "products.html";
      res.statusCode = 200;
      console.log(req.url);
      break;
    case "/contact":
      path += "contact.html";
      res.statusCode = 200;
      console.log(req.url);
      break;
    case "/subscribe":
      path += "subscribe.html";
      res.statusCode = 200;
      console.log(req.url);
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      console.log(req.url);
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
