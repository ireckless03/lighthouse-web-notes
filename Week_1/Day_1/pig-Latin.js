'use strict';
const originalWords = process.argv.slice(2);
const length = originalWords.length;
const latin = "ay";
const results = [];
for (let i = 0; i < length; i++) {
  const word = originalWords[i].slice(1,originalWords[i].length) + originalWords[i][0] + latin;
  results.push(word);
}
console.log(results.join(" "));