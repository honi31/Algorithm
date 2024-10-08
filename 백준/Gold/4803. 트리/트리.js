const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = 0;
let tc = 1;
while (true) {
  let [n, m] = input[line].split(" ").map(Number);
  if (n == 0 && m == 0) break;
  arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    arr[x].push(y);
    arr[y].push(x);
  }
  visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCycle(i, 0)) {
        cnt++;
      }
    }
  }
  if (cnt === 0) console.log(`Case ${tc}: No trees.`);
  else if (cnt === 1) console.log(`Case ${tc}: There is one tree.`);
  else console.log(`Case ${tc}: A forest of ${cnt} trees.`);
  line += m + 1;
  tc++;
}

function isCycle(x, prev) {
  visited[x] = true;
  for (let y of arr[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) return true;
    } else if (y != prev) return true;
  }
  return false;
}
