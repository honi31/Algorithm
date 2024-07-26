let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

let myMap = new Map();
for (let i = 0; i < uniqueArr.length; i++) {
  myMap.set(uniqueArr[i], i);
}
let answer = "";
for (let x of arr) {
  answer += myMap.get(x) + " ";
}
console.log(answer);
