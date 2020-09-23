const net = require('net');
const { IP, PORT } = require('./constants');

// establishes connection with game server

const connect = function () {
  //where we are connecting
  const conn = net.createConnection({
    host:IP,
    port:PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  //what to do when it recieves data
  conn.on('data', (data) => {
    console.log("server says: ", data);
  });
  //what to do when it connects
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: DAD");
  })
  //move snake up on connect
  conn.on('connect', () => {
    //moves snake up
    //conn.write('Move: up')
    // for loop that moves snek up and left
    // for (let time = 0; time < 90; time++) {
    //   if (time % 2 === 0) {
    //     setTimeout(() => {
    //       conn.write("Move: left")
    //     }, time*1000)
    //   } else {
    //     setTimeout(() => {
    //       conn.write("Move: up")
    //     }, time*500)
    //   }
    // }
  });
  return conn;
}
//exporting our connect function
module.exports = connect;