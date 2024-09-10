let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]);
let d = new Array(n + 1).fill(0);

for (let i = 2; i <= n; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 == 0) {
    d[i] = Math.min(d[parseInt(i / 2)] + 1, d[i]);
  }
  if (i % 3 == 0) {
    d[i] = Math.min(d[parseInt(i / 3)] + 1, d[i]);
  }
}
console.log(d[n]);
