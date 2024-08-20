const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

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

let [n, k] = input[0].split(" ").map(Number);
const MAX = 100001;
let visited = new Array(MAX).fill(0);

let time = 0;

function bfs() {
  let queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength != 0) {
    let cur = queue.dequeue();
    if (cur == k) {
      return visited[cur];
    }
    for (let x of [cur - 1, cur + 1, cur * 2]) {
      if (x < 0 || x > MAX) continue;
      if (visited[x] == 0) {
        visited[x] = visited[cur] + 1;
        queue.enqueue(x);
      }
    }
  }
}
console.log(bfs());
