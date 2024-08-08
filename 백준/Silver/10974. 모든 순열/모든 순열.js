const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}
let visited = new Array(n).fill(false);
let index = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === n) {
    let result = [];
    for (let x of index) {
      result.push(arr[x]);
    }
    for (let num of result) {
      answer += num + " ";
    }
    answer += "\n";
    return;
  }

  for (let j = 0; j < arr.length; j++) {
    if (visited[j]) continue;
    index.push(j);
    visited[j] = true;
    dfs(arr, depth + 1);
    index.pop();
    visited[j] = false;
  }
}

dfs(arr, 0);
console.log(answer);
