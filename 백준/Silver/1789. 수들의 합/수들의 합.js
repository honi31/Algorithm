let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let sum = 0;
let cnt = 0;
while (sum <= n) {
  cnt += 1;
  sum += cnt;
}
console.log(cnt - 1);
