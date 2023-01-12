'use strict';

for (let j = 0; j < process.argv.length; j++) {
  let newArr = [];
  let finalArr = []
  let value = []
  let latin = "ay"
  value = process.argv[j][0]
  if (j > 1) {
    for (let i = 0; i < process.argv[j].length; i++) {
      newArr.push(process.argv[j][i]);
    }
    newArr.splice(0, 1)
    newArr.push(value + latin)
    finalArr.push(newArr)
  }
  console.log(finalArr.join(""))
  }