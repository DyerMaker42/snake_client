const net = require('net');

// establishes connection with game server

const connect = function () {
  //where we are connecting
  const conn = net.createConnection({
    host:'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  //what to do when it recieves data
  conn.on('data', (data) => {
    console.log("server says: ",data);
  });
  //what to do when it connects
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name:DAD');
  })

  return conn;
}
//exporting our connect function
module.exports = connect;