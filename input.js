let connection;

const w = "Move: up";
const s = "Move: down";
const a = "Move: left";
const d = "Move: right";

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = (key) => {
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
    } if (key === 'w') {
      conn.write(w);
    } if (key === 's') {
      conn.write(s);
    } if (key === 'a') {
      conn.write(a);
    } if (key === 'd') {
      conn.write(d);
    } if (key === 'i') {
      conn.write("Say: Hello");
    }
  };
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput }
