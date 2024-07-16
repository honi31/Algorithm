let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()
let n = Number(input)

for (i=1; i<=9; i++){
    console.log(`${n} * ${i} = ${n*i}`)
}