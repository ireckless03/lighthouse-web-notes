const myFn = function() {
  console.log("I am function.");
}

myFn.someAttribute = 42;// someAttribute(key) is assigned the value of 42 to the object myFn
// myFn.someAttribute calls the value in the attribute key
console.log(myFn.someAttribute);

function runner(f) { // runner function runs the argument (F) that is passed to it
  f();
}
// we pass a reference to our myFn which gets invoked by runner function below
runner(myFn);