const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let k = Number(input[0]);

let arr = input[1].split(" ");
let result = [];
let visited = new Array(10).fill(false);

let current = "";
let first = "";

function dfs(depth) {
  if (depth === k + 1) {
    let check = true;
    for (let j = 0; j < k; j++) {
      if (arr[j] === "<") {
        if (result[j] > result[j + 1]) check = false;
      } else if (arr[j] === ">") {
        if (result[j] < result[j + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of result) current += x + "";
      if (first == "") first = current;
    }
    return;
  }

  for (let j = 0; j < 10; j++) {
    if (visited[j]) continue;
    visited[j] = true;
    result.push(j);

    dfs(depth + 1);
    visited[j] = false;
    result.pop();
  }
}

dfs(0);
console.log(current + "\n" + first);
