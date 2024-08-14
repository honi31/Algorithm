const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let couple = Number(input[1]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i] = [];
}
for (let j = 2; j < couple + 2; j++) {
  let [x, y] = input[j].split(" ").map(Number);
  arr[x].push(y);
  arr[y].push(x);
}

let visited = new Array(n + 1).fill(false);
let cnt = 0;
function dfs(arr, v, visited) {
  visited[v] = true;
  cnt += 1;
  for (let x of arr[v]) {
    if (!visited[x]) {
      dfs(arr, x, visited);
    }
  }
}
dfs(arr, 1, visited);
console.log(cnt - 1);
