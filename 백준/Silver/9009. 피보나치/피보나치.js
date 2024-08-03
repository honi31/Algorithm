let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
let n = Number(input[0]);
for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);
  let index = pibo.length - 1;
  let result = [];
  while (num > 0) {
    if (num >= pibo[index]) {
      num -= pibo[index];
      result.push(pibo[index]);
    }
    index -= 1;
  }
  let answer = "";
  for (let i = result.length - 1; i >= 0; i--) {
    answer += result[i] + " ";
  }
  console.log(answer);
}
