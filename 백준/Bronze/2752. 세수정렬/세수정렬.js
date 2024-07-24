let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let answer = "";
function compare(a, b) {
  return a - b;
}

input.sort(compare);
for (let i = 0; i < input.length; i++) {
  answer += input[i] + " ";
}
console.log(answer);
