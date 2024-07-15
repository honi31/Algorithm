let fs = require('fs')
let input = fs.readFileSync(0, 'utf-8').toString().split('\n')

let a = Number(input[0])
let b_arr = input[1].split('')

console.log(a*Number(b_arr[2]))
console.log(a*Number(b_arr[1]))
console.log(a*Number(b_arr[0]))
console.log(a*Number(b_arr[2])+a*Number(b_arr[1])*10+a*Number(b_arr[0])*100)