const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer1) => {
  rl.question("How old are you?", (answer2) => {
    rl.question("What kind of music do you like?", (answer3) => {
      rl.question("Whats the worst thing you've ever eaten?", (answer4) => {
        console.log(`${answer1} is ${answer2} years old. ${answer1} likes to listen to ${answer3}. His/her hates ${answer4}.`);
        rl.close();
      });
    });
  });
});