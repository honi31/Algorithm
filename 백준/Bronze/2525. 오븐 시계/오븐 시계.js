let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let hour = Number(input[0].split(' ')[0])
let min = Number(input[0].split(' ')[1])

let time = Number(input[1])

if (min+time >= 60) {
    hour = hour+parseInt((min+time)/60) 
    if(hour >= 24){
        hour = hour%24
    }
    min = (min+time)%60
}
else {
    min = min+time
}

console.log(hour+" "+min)