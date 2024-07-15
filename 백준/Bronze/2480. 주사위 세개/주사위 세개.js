let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) { 
    console.log(1000 + a * 100);
} else if (c === b) {
    console.log(1000 + b * 100);
} else if (c === a) {
    console.log(1000 + c * 100);
}
  else {
    if (a > b && a > c){
      console.log(a*100)
    }
    else if(b > a && b > c) {
      console.log(b*100)
    }
    else {
      console.log(c*100)
    }
  }