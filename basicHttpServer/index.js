
// Defining some constants used in the script
const hostname = '127.0.0.1';
const port = 3000;
////////////////////

// Load the http Library
const http = require('http');


// Create an Http Server object
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World :-) \n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

