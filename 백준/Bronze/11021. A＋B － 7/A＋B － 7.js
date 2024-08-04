let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
let result = "";
for (let i = 1; i <= n; i++) {
  arr = input[i].split(" ").map(Number);
  result += "Case #" + i + ": " + (arr[0] + arr[1]) + "\n";
}

console.log(result);
