let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let array = input[1].split(' ')

let minValue = array.reduce((a,b) => Math.min(a,b))
let maxValue = array.reduce((a,b) => Math.max(a,b))

console.log(minValue+" "+maxValue)