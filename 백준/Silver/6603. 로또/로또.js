const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let data = input[i].split(" ").map(Number);
  if (data[0] === 0) break;
  else {
    n = data[0];
    arr = data.slice(1);
    visited = new Array(n).fill(false);
    index = [];
    answer = "";
    dfs(arr, 0, 0);
    console.log(answer);
  }
}
function dfs(arr, start, depth) {
  if (depth === 6) {
    let result = [];
    for (let x of index) result.push(arr[x]);
    for (let y of result) answer += y + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    index.push(i);
    visited[i] = true;
    dfs(arr, i + 1, depth + 1);
    index.pop();
    visited[i] = false;
  }
}
