const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = BigInt(input);

function eulerTotient(n) {
  let result = n;
  let p = 2n;

  while (p * p <= n) {
    if (n % p === 0n) {
      while (n % p === 0n) {
        n /= p;
      }
      result -= result / p;
    }
    p += 1n;
  }

  if (n > 1n) {
    result -= result / n;
  }

  return result;
}

const result = eulerTotient(n);
console.log(result.toString());
