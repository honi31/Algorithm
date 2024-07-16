let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input.map((x) => Number(x));
let mySet = new Set();

for (i = 0; i < 10; i++) {
  mySet.add(arr[i] % 42);
}

console.log(mySet.size);
