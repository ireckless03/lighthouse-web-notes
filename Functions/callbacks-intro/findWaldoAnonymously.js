// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(name,index);
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(name,index) {
  console.log(`${name} is located at: ${index}`);
});