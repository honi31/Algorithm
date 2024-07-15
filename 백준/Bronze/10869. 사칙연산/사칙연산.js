let fs = require('fs')
let [a, b] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number)

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)