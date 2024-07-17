let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1]
let sum = 0;
for (let x of arr) {
  sum += Number(x);
}
console.log(sum);
