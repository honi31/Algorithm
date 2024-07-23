let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = input[0];
let obj = {};
class Queue {
  constructor() {
    this.obj = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.obj[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.obj[this.headIndex];
    delete this.obj[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.obj[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();
for (let i = 1; i <= n; i++) {
  queue.enqueue(i);
}
for (let j = 1; j < n; j++) {
  queue.dequeue();

  queue.enqueue(queue.dequeue());
}
console.log(queue.peek());
