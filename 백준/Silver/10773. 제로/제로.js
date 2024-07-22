let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);

  if (num === 0) {
    arr.pop();
  } else {
    arr.push(num);
  }
}

let sum = 0;
for (let x of arr) {
  sum += x;
}
console.log(sum);
