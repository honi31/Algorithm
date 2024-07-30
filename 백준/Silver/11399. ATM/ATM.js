let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let time = input[1].split(" ").map(Number);
time.sort((a, b) => a - b);

let sum = 0;
let arr = [];
let result = 0;
for (let i = 0; i < time.length; i++) {
  sum += time[i];

  arr.push(sum);

  result += arr[i];
}
console.log(result);
