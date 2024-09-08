let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let [n, m, h] = input[0].split(" ").map(Number);

let arr = [];
let d = new Array(h + 1).fill(0);
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

d[0] = 1;
for (let i = 0; i < n; i++) {
  let data = [];

  for (j = 0; j <= h; j++) {
    for (let k = 0; k < arr.length; k++) {
      if (d[j] != 0 && j + arr[i][k] <= h) {
        data.push([j + arr[i][k], d[j]]);
      }
    }
  }

  for ([height, value] of data) {
    d[height] = (d[height] + value) % 10007;
  }
}
console.log(d[h]);
