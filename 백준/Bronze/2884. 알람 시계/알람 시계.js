let fs = require('fs')
let input = fs.readFileSync(0,'utf-8').toString().split(' ')
let H = Number(input[0])
let M = Number(input[1])

if (M < 45) {
    M = 15+M
    H = H-1
    if(H < 0)
        H = 23
      
}
else {
    M = M-45
   
}
console.log(H+' '+M)
