let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = input[0];
let queue = [];
let result = "";
for (let i = 1; i <= n; i++) {
  let word = input[i].split(" ");

  if (word[0] === "push") {
    queue.push(word[1]);
  } else if (word[0] === "pop") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else {
      result += queue.shift() + "\n";
    }
  } else if (word[0] === "size") {
    result += queue.length + "\n";
  } else if (word[0] === "empty") {
    if (queue.length === 0) {
      result += 1 + "\n";
    } else {
      result += 0 + "\n";
    }
  } else if (word[0] === "front") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else {
      result += queue[0] + "\n";
    }
  } else if (word[0] === "back") {
    if (queue.length === 0) {
      result += "-1" + "\n";
    } else {
      result += queue[queue.length - 1] + "\n";
    }
  }
}
console.log(result);
