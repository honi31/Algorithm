let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let n = Number(input[0])

let result = ""

for (i=1; i<=n; i++) {
    let data = input[i].split(" ")
    let a = Number(data[0])
    let b = Number(data[1])
    result += a+b+"\n"
}

console.log(result)