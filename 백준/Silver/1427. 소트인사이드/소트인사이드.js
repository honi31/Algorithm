let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("").map(Number);
function compare(a, b) {
  if (a < b) {
    return 1;
  } else return -1;
}

arr.sort(compare);
let answer = arr.join("");
console.log(answer);