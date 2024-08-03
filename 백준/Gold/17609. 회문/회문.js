let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);

function palindrome(x) {
  return x == x.split("").reverse().join("");
}
let result = "";
for (let i = 1; i <= n; i++) {
  let str = input[i];
  if (palindrome(str)) {
    result += 0 + "\n";
  } else {
    let len = str.length;
    let state = false;
    for (let j = 0; j < parseInt(len / 2); j++) {
      if (str[j] != str[len - j - 1]) {
        if (palindrome(str.slice(0, j) + str.slice(j + 1, len))) {
          state = true;
        }
        if (palindrome(str.slice(0, len - j - 1) + str.slice(len - j, len))) {
          state = true;
        }
        break;
      }
    }
    if (state) result += 1 + "\n";
    else result += 2 + "\n";
  }
}

console.log(result);
