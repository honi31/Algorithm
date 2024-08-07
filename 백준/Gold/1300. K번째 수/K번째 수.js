const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

let start = 0;
let end = 10 ** 10;

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(parseInt(mid / i), n);
  }
  if (cnt >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}
console.log(result);
