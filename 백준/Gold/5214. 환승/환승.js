let file = require("fs").readFileSync("/dev/stdin");
let input = file.toString().split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let [n, k, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= m + n; i++) {
  arr[i] = [];
}

for (let i = 1; i <= m; i++) {
  let graph = input[i].split(" ").map(Number);
  for (let x of graph) {
    arr[x].push(n + i);
    arr[n + i].push(x);
  }
}
let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1, 1]);
let found = false;

while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue();
  if (now == n) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }
  for (let y of arr[now]) {
    if (!visited.has(y)) {
      queue.enqueue([dist + 1, y]);
      visited.add(y);
    }
  }
}
if (!found) console.log(-1);
