const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: '10.0.0.39'
  }, () => {
    console.log("Connection established!");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
  console.log(data);
})
  return conn;
};

console.log("Connecting ...");
connect();