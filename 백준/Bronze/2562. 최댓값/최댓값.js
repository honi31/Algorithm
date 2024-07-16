let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input.map((x) => Number(x));

let maxValue = arr.reduce((a, b) => Math.max(a, b));
let index = arr.indexOf(maxValue);

console.log(maxValue + "\n" + (index + 1));
