const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
function dfs(arr, n, m, x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= m) return false;

  if (arr[x][y] == 1) {
    arr[x][y] = -1;

    dfs(arr, n, m, x - 1, y);
    dfs(arr, n, m, x, y - 1);
    dfs(arr, n, m, x + 1, y);
    dfs(arr, n, m, x, y + 1);
    return true;
  }
  return false;
}

let t = Number(input[0]);
let line = 1;

while (t--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    arr[x][y] = 1;
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(arr, n, m, i, j)) answer++;
    }
  }
  line += k + 1;
  console.log(answer);
}
