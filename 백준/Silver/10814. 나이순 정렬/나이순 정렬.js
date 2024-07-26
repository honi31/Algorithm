let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ");
  x = Number(x);
  arr.push([x, y]);
}
function compare(a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return a[0] - b[0];
  }
}
arr.sort(compare);
let answer = "";
for (let x of arr) {
  answer += x[0] + " " + x[1] + "\n";
}
console.log(answer);
