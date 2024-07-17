let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let c = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let maxValue = arr.reduce((a, b) => Math.max(a, b));
let sum = 0;
for (i = 0; i < c; i++) {
  arr[i] = (arr[i] / maxValue) * 100;
  sum += arr[i];
}
let average = sum / c;
console.log(average);
