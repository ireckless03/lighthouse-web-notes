let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up")
  }

  if (key === 'a') {
    connection.write("Move: left")
  }

  if (key === 's') {
    connection.write("Move: down"

    )
  }

  if (key === '1') {
    connection.write("Say: Winner Winner Chicken Dinner")
  }

  if (key === '2') {
    connection.write("Say: HAHA")
  }

  if (key === '3') {
    connection.write("Say: LOOL")
  }
};

module.exports = {setupInput}