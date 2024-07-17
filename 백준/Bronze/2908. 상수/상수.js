let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let str1 = Number(input[0].split("").reverse().join(""));
let str2 = Number(input[1].split("").reverse().join(""));

if (str1 > str2) {
  console.log(str1);
} else {
  console.log(str2);
}
