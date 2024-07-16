let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()

let n = Number(input)
let str = "";
let result = "";

for (i=1; i<=n; i++){
	str += "*";
	result += str+"\n";
}
console.log(result)