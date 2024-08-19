const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let [add, sub, mul, div] = input[2].split(" ").map(Number);
let minValue = 1e9;
let maxValue = -1e9;

function dfs(idx, num) {
  if (idx == n) {
    minValue = Math.min(minValue, num);
    maxValue = Math.max(maxValue, num);
    return;
  }
  if (add > 0) {
    add--;
    dfs(idx + 1, num + arr[idx]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(idx + 1, num - arr[idx]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(idx + 1, num * arr[idx]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(idx + 1, ~~(num / arr[idx]));
    div++;
  }
}
dfs(1, arr[0]);
console.log(maxValue + "\n" + minValue);
