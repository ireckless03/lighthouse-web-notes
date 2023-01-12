const raisinAlarm = function (cookie) {
  for(let item of cookie) {
    if(item === "🍇") {
      return "Raisin alert!"
    }
  }

  return "All good!"
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookies) {
  let emptyArr = []
  for (let item of cookies) {
    let result = raisinAlarm(item)
    emptyArr.push(result)
  }
  return emptyArr
};

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);