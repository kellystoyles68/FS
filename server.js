// setting up a server on localhost:3000

const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello, You are connected!!");
  res.end();
  console.log(req);
  console.log(req.url, req.method);
});

//get the server to listen for requests

server.listen(3000, "localhost", () => {
  console.log(
    "Success! Server is running and listening for requests on port 3000"
  );
});
