const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from Jenkins Docker CI/CD once again🚀");
  res.end();
}).listen(3000);
