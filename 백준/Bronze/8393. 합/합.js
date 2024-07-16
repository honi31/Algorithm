let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()
let n = Number(input)
let sum = 0
for (i=1; i<=n; i++) {
    sum += i
}
console.log(sum)