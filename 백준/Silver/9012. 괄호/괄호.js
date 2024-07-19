let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let arr = input[i];
  let stack = [];
  let result = "YES";

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push(arr[j]);
    } else {
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }
  if (stack.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
