let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let c = Number(input[0]);
let str = "";

for (i = 1; i <= c; i++) {
  let average = 0;
  let sum = 0;
  let cnt = 0;
  let percent = 0;
  let data = input[i].split(" ").map(Number);
  let n = data[0];

  for (j = 1; j <= n; j++) {
    sum += data[j];
  }
  average = sum / n;

  for (k = 1; k <= n; k++) {
    if (data[k] > average) {
      cnt += 1;
    }
  }
  percent = ((cnt / n) * 100).toFixed(3);
  str += percent + "%" + "\n";
}
console.log(str);
