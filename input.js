const { stdin } = require("process");

const handleUserInput = function(data){
  if(data === '\u0003'){
    process.exit();
  }
  if(data === 'w'){
    console.log("up")
    //stdin.write("Move: up")
  } else if (data === 'a'){
    console.log('left')
  } else if(data === 's'){
    console.log('down')
  } else if (data === 'd'){
    console.log("right")
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

module.exports = setupInput;