const net = require('net');

// establishes connection with game server

const connect = function () {
  const conn = net.createConnection({
    host:'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log("server says: ",data);
  });

  return conn;
}

console.log('Connecting ...');
connect();


