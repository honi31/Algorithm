let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let city = Number(input[0]);
let distance = input[1].split(" ").map(Number);
let oil = input[2].split(" ").map(Number);

let minValue = oil[0];
for (let i = 0; i < oil.length; i++) {
  minValue = Math.min(minValue, oil[i]);
  oil[i] = minValue;
}

let answer = 0;
for (let i = 0; i < distance.length; i++) {
  answer += distance[i] * oil[i];
}
console.log(answer);
