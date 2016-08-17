var fs = require('fs');
var path = require('path');
var http2 = require('http2');
var urlParse = require('url').parse;

http2.globalAgent = new http2.Agent({
  // Accept self-signed certificates
  rejectUnauthorized: false
});

// Sending the request
//var url = process.argv.pop();
var url = 'https://localhost:8080/servercallback.js'
var options = urlParse(url);

// Optionally verify self-signed certificates.
if (options.hostname == 'localhost') {
  options.key = fs.readFileSync(path.join(__dirname, '/localhost.key'));
  options.ca = fs.readFileSync(path.join(__dirname, '/localhost.crt'));
}

require('http2').get('https://localhost:8080/', function(response) {
  response.pipe(process.stdout);
});
