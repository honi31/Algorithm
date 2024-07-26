let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let arr = input.split("").map(Number);

arr.sort((a, b) => b - a);
let answer = arr.join("");

console.log(answer);
