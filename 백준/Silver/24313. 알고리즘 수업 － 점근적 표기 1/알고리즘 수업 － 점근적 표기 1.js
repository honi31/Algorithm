let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = Number(input[0].split(" ")[0]);
let b = Number(input[0].split(" ")[1]);

let c = Number(input[1]);
let n = Number(input[2]);

b <= (c - a) * n && c >= a ? console.log(1) : console.log(0);
