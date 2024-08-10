const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0].split(" ")[0]);
const m = Number(input[0].split(" ")[1]);
let arr = [];
let selected = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let answer = "";
function dfs(arr, depth) {
  let result = [];
  if (depth === m) {
    for (let index of selected) result.push(arr[index]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let j = 0; j < arr.length; j++) {
    selected.push(j);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);
