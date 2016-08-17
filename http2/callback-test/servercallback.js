var fs = require('fs');
var path = require('path');
var rounds = 10;

var options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt')
};

require('http2').createServer(options, function(request, response) {

  response.writeHead(200, {'Content-Type': 'text/plain'});

  response.write('hello OOOOOOO fill data to avoid buffering...  OOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');
  response.write('hello OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\n');

  console.error(new Date().toLocaleString() + ' - after 1K writeouts ');

  while (rounds<3) {
    setTimeout(function(){
      response.write(new Date().toLocaleString());
    }, 1000);
    console.error("round: " + rounds);
    rounds++;
  }
  console.error(new Date().toLocaleString() + " - after rounds.");

  for (i = 0; i < 3; i++) {

    response.write(new Date().toLocaleString()+"\n");
    sleep(1000);

  }
  console.error(new Date().toLocaleString() + " - after for loop.");

  setTimeout(function(){
    response.write("Hello ");
    console.error(new Date().toLocaleString() + ' - response.write');
  }, 2000);

  setTimeout(function(){
    response.write("World!\n");
    console.error(new Date().toLocaleString() + ' - response.write');
  }, 2500);

  // End Response after 5 seconds
  setTimeout(function(){
    response.end("Done!");
    console.error(new Date().toLocaleString() + ' - response.end');
  }, 5000);

}).listen(8080);


function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}
