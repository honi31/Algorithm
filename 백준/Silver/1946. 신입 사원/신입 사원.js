let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let line = 1;
for (let i = 0; i < t; i++) {
  n = Number(input[line]);
  let arr = [];
  for (let j = line + 1; j <= line + n; j++) {
    let data = input[j].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count += 1;
    }
  }
  console.log(count);
  line += n + 1;
}
