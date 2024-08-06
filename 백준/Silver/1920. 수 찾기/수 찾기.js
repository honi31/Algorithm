let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let m = Number(input[2]);

let arr = input[1].split(" ").map(Number);
arr.sort(function (a, b) {
  return a - b;
});
let arr2 = input[3].split(" ").map(Number);

function binarySearch(arr, target, start, end) {
  if (start > end) return 0;
  let mid = parseInt((start + end) / 2);
  if (arr[mid] == target) return 1;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}
let result = "";
for (let x of arr2) {
  result += binarySearch(arr, x, 0, n - 1) + "\n";
}
console.log(result);
