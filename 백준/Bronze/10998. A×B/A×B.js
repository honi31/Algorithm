let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().split("\n")
let arr = input[0].split(" ")
let a = parseInt(arr[0])
let b = parseInt(arr[1])

console.log(a*b)