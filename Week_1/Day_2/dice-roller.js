// write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice
// take parameter input into the function
// function sees read parameter
// checks if it's a positive whole number
// then rolls a dice (parameter) number of times
// adding results together
// displaying rusults in a single line.
'use strict';

const parameter = process.argv.slice(2) * 1;
const diceCounter = (parameter) => {
  let results = [];
  for (let i = 0; i < parameter; i++) {
    results.push(rollTheDice());
  }
  return results;
};

const rollTheDice = () => {
  let randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
};

let results = diceCounter(parameter);
console.log(`Rolled ${parameter} dice: ${results.join(", ")}`);
