// Create web server
// 1. Create a web server
// 2. Read the file comments.json
// 3. Return the content of the file as a response

// Step 1
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
      // Step 2
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal server error');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
});
