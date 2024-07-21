let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const time = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};
let result = 0;
let arr = input[0].split("");
for (let times in time) {
  for (let i = 0; i < arr.length; i++) {
    if (times.includes(arr[i])) {
      result += time[times];
    }
  }
}
console.log(result);
