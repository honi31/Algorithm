let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let len = input.map((x) => x.length);
let maxValue = Math.max(...len);
let str = "";
for (let i = 0; i < maxValue; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    else {
      str += input[j][i];
    }
  }
}

console.log(str);
