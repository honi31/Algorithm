let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

let n = Number(input[0]);
let n_set = new Set(input[1].split(" "));
let m = Number(input[2]);
let m_set = new Set(input[3].split(" "));

let result = "";
for (let x of m_set) {
  n_set.has(x) ? (result += 1 + " ") : (result += 0 + " ");
}
console.log(result);
