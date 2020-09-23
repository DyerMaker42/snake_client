const require = require('net');

// establishes connection with game server

const connect = function () {
  const conn = net.createConnection({
    host:'<IP ADDRESS HERE>',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();