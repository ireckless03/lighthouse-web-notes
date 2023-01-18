const net = require("net");

// establishes a connection with the game server
const connect = function (client) {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  conn.on("connect", () => {
    console.log("Hi")
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");

connect();