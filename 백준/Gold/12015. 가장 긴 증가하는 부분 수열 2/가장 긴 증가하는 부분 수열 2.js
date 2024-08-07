const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let lis = [0];
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}
for (let x of arr) {
  if (lis[lis.length - 1] < x) {
    lis.push(x);
  } else {
    let index = lowerBound(lis, x, 0, lis.length);
    lis[index] = x;
  }
}
console.log(lis.length - 1);
