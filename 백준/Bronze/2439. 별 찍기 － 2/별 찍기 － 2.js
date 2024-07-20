let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let star = "";
let blank = "";

for (let i = 1; i <= n; i++) {
  star += "*";
  for (let j = 0; j < n - i; j++) {
    blank += " ";
  }
  console.log(blank + star);
  blank = "";
}
