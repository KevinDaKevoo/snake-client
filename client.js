const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50542,
    host: '135.23.222.131'
  }, () => {
    console.log("Connection established!");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  const name = "Kev"
  conn.write(`Name: ${name}`)

  conn.on('data', (data) => {
  console.log(data);
})
  return conn;
};

module.exports = { connect };