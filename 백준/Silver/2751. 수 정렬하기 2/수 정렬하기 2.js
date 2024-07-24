let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let n = input[0];
let answer = "";
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
function compare(a, b) {
  return a - b;
}

arr.sort(compare);

for (let j = 0; j < arr.length; j++) {
  answer += arr[j] + "\n";
}

console.log(answer);
