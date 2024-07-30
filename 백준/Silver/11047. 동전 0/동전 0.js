let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0].split(" ")[0]);
let money = Number(input[0].split(" ")[1]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = Number(input[i]);
}
arr.sort((a, b) => b - a);
let cnt = 0;
for (let j = 0; j < arr.length; j++) {
  if (money >= arr[j] && money > 0) {
    cnt += Math.floor(money / arr[j]);
    money = money % arr[j];
  }
}
console.log(cnt);
