const  connect = require('./client');

//setup user interface

cosnt setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin
}

console.log('Connecting ...');
connect();


