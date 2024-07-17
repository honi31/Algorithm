let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let str = "";
for (i = 1; i <= n; i++) {
  let arr = input[i].split(" ");
  let num = Number(arr[0]);
  for (let x of arr[1]) {
    str += x.repeat(num);
  }
  str += "\n";
}
console.log(str);
