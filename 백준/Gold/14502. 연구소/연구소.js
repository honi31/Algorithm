const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let data = [];
let arr = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(" ").map(Number);
  data.push(line);
  arr.push(new Array(m).fill(0));
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result = 0;
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (arr[nx][ny] == 0) {
      arr[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

function getSafe() {
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) safe += 1;
    }
  }
  return safe;
}

function dfs(cnt) {
  if (cnt == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        arr[i][j] = data[i][j];
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[i][j] == 2) virus(i, j);
      }
    }
    result = Math.max(result, getSafe());
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (data[i][j] == 0) {
        data[i][j] = 1;
        dfs(cnt + 1);
        data[i][j] = 0;
      }
    }
  }
}
dfs(0);
console.log(result);
