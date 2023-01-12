'use strict';

for (let j = 0; j < process.argv.length; j++) {
  let reverseArr = [];
  if (j > 1) {
    for (let i = process.argv[j].length - 1; i > -1; i--) {
      reverseArr.push(process.argv[j][i]);
    }
    console.log(reverseArr.join(""));
  }
}