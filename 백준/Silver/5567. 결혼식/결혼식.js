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

let n = Number(input[0]);
let m = Number(input[1]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i] = [];
}

for (let i = 2; i <= m + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}
let distance = new Array(n + 1).fill(-1);
distance[1] = 0;

let queue = new Queue();
queue.enqueue(1);
while (queue.getLength() != 0) {
  let now = queue.dequeue();
  for (let nextNode of arr[now]) {
    if (distance[nextNode] == -1) {
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}

let result = 0;
for (let i = 1; i <= n; i++) {
  if (distance[i] != -1 && distance[i] <= 2) {
    result++;
  }
}
console.log(result - 1);
