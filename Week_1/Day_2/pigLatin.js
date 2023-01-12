var originalWords = process.argv.slice(2);
var pigLatinWords = [];

for (var i = 0; i < originalWords.length; i++) {
  console.log(originalWords[i]);
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  console.log('word', word);
  console.log('first letter', word[0]);
  console.log('rest of word', word.slice(1, word.length))
  return word.slice(1, word.length) + word[0] + "ay";
}