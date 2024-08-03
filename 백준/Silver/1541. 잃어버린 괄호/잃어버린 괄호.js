let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("-");

let answer = 0;
for (let i = 0; i < input.length; i++) {
  let numbers = input[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);
  if (i == 0) {
    answer += numbers;
  } else {
    answer -= numbers;
  }
}
console.log(answer);
