const net = require("net");

// establishes a connection with the game server
const connect = function (IP, PORT) {
  const conn = net.createConnection({
    port: PORT,
    host: IP
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