const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 0; i < n + 1; i++) {
  arr[i] = [];
}
for (let i = 1; i <= n - 1; i++) {
  let [x, y, d] = input[i].split(" ").map(Number);
  arr[x].push([y, d]);
  arr[y].push([x, d]);
}
let answer = "";

function dfs(x, distance) {
  if (visited[x]) return;
  visited[x] = true;
  d[x] = distance;
  for (let [y, d] of arr[x]) {
    dfs(y, distance + d);
  }
}
for (let i = 0; i < m; i++) {
  let [x, y] = input[n + i].split(" ").map(Number);
  visited = new Array(n + 1).fill(false);
  d = new Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(d[y]);
}
