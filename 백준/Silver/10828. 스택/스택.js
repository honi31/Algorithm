let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let stack = [];
let output = [];

for (let i = 1; i <= n; i++) {
  let direction = input[i].split(" ");

  if (direction[0] === "push") {
    stack.push(direction[1]);
  } else if (direction[0] === "pop") {
    if (stack.length === 0) {
      output.push(-1);
    } else {
      output.push(stack.pop());
    }
  } else if (direction[0] === "size") {
    output.push(stack.length);
  } else if (direction[0] === "empty") {
    if (stack.length === 0) {
      output.push(1);
    } else {
      output.push(0);
    }
  } else if (direction[0] === "top") {
    if (stack.length === 0) {
      output.push(-1);
    } else {
      output.push(stack[stack.length - 1]);
    }
  }
}

console.log(output.join("\n"));
