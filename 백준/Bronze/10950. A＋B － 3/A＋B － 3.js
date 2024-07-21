let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let sum = 0;
let result = "";
for (i = 1; i <= n; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);

  sum = a + b;
  result += sum + "\n";
}
console.log(result);
