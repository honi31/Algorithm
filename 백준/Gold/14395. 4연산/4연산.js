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

let [s, t] = input[0].split(" ").map(Number);
let queue = new Queue();
queue.enqueue([s, ""]);

let visited = new Set([s]);
let found = false;

if (s == t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() != 0) {
  let [num, op] = queue.dequeue();
  if (num > 1e9) continue;
  if (num == t) {
    console.log(op);
    found = true;
    break;
  }
  for (let x of ["*", "+", "-", "/"]) {
    let nextNum = num;
    if (x == "*") nextNum *= num;
    if (x == "+") nextNum += num;
    if (x == "-") nextNum -= num;
    if (x == "/" && num != 0) nextNum = 1;
    if (!visited.has(nextNum)) {
      queue.enqueue([nextNum, op + x]);
      visited.add(nextNum);
    }
  }
}

if (!found) console.log(-1);
