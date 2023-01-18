const net = require("net");
const connect = function(client) {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
  });

  conn.on("connect", () => {
    conn.write("Name: DoD");
  });
  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect, net,};

