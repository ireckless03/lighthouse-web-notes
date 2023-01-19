const net = require("net");
const {ip, port, name} = require('./constants')
const connect = function(client) {
  const conn = net.createConnection({
    host: ip,
    port,
  });

  conn.on("connect", () => {
    conn.write(name);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect, net,};

