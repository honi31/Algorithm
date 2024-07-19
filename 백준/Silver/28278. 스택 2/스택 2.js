let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let stack = [];
let output = [];

for (let i = 1; i <= n; i++) {
  let direction = input[i].split(" ").map(Number);

  if (direction[0] === 1) {
    stack.push(direction[1]);
  } else if (direction[0] === 2) {
    if (stack.length === 0) {
      output.push(-1);
    } else {
      output.push(stack.pop());
    }
  } else if (direction[0] === 3) {
    output.push(stack.length);
  } else if (direction[0] === 4) {
    if (stack.length === 0) {
      output.push(1);
    } else {
      output.push(0);
    }
  } else if (direction[0] === 5) {
    if (stack.length === 0) {
      output.push(-1);
    } else {
      output.push(stack[stack.length - 1]);
    }
  }
}

console.log(output.join("\n"));
