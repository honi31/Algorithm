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

let [n, m, k, x] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i] = [];
}

for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
}
let distance = new Array(n + 1).fill(-1);
distance[x] = 0;

let queue = new Queue();
queue.enqueue(x);
while (queue.getLength() != 0) {
  let now = queue.dequeue();
  for (let city of arr[now]) {
    if (distance[city] == -1) {
      distance[city] = distance[now] + 1;
      queue.enqueue(city);
    }
  }
}

let check = false;
for (let i = 1; i <= n; i++) {
  if (distance[i] == k) {
    console.log(i);
    check = true;
  }
}
if (!check) console.log(-1);
