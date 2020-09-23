const  connect = require('./client');

//setup user interface

const handleUserInput = function(data){
  if(data === '\u0003'){
    process.exit();
  }
  //stdin.write(data);
}
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  //handleUserInput();
  return stdin;
}

console.log('Connecting ...');
connect();
setupInput();

