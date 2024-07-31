let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let result = 0;
let flag = false;
while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    result += Math.floor(n / 5);
    console.log(result);
    flag = true;
    break;
  }
  n -= 3;
  result += 1;
}
if (!flag) {
  console.log(-1);
}
