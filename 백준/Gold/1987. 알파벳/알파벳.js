const [n,...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [maxY, maxX] = n.split(" ").map(Number);
const graph = input.map((value) => value.split(""));

const dx = [0,0,1,-1];
const dy = [1,-1, 0,0]

let count = 0;

const visited = new Set(graph[0][0]);


function dfs(depth, y, x) {
    count = Math.max(count, depth);
    for(let i = 0; i<4; i++) {
        if(check(y+dy[i], x+dx[i]) == false) continue;
        visited.add(graph[y+dy[i]][x+dx[i]]);
        dfs(depth + 1, y+dy[i], x+dx[i]);
        visited.delete(graph[y+dy[i]][x+dx[i]]);
    }

}

function check(y, x) {
    if(y < 0 || x < 0 || x>= maxX || y >= maxY) {
        return false;
    } else if(visited.has(graph[y][x])) {
        return false;
    }
    return true
}

dfs(1,0,0)
console.log(count)