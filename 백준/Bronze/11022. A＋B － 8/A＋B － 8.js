let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]);
let result = "";
for (let i = 1; i <= n; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let sum = a + b;
  result += "Case #" + i + ": " + a + " + " + b + " = " + sum + "\n";
}
console.log(result);