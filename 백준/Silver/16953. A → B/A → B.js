let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let n = Number(input[0]);
let num = Number(input[1]);

let cnt = 0;
let flag = false;
while (n <= num) {
  if (n === num) {
    flag = true;
    break;
  }
  if (num % 10 === 1) {
    num = Math.floor(num / 10);
    cnt += 1;
  } else if (num % 2 === 0) {
    num /= 2;
    cnt += 1;
  } else {
    flag = false;
    break;
  }
}
if (flag) {
  console.log(cnt + 1);
} else {
  console.log(-1);
}
