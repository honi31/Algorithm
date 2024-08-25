let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  
  if (a === 0 && b === 0) break; 
  
  let sum = a + b;
  console.log(sum);
}