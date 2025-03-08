class Stack {
  constructor() {
    this.items = [];
  }

  // Push operation
  push(element) {
    this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty operation
  isEmpty() {
    return this.items.length === 0;
  }

  // Size operation
  size() {
    return this.items.length;
  }

  // Print the stack
  print() {
    console.log(this.items);
  }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();

// ChatGPT
class Stack1 {
  constructor() {
    this.list = [];
    this.top = -1; // Stack starts empty
  }

  push(item) {
    this.list[++this.top] = item; // Increment `top`, then store `item`
  }
}

const stack1 = new Stack1();
stack1.push(10); // top = 0, list[0] = 10
stack1.push(20); // top = 1, list[1] = 20
console.log(stack1.list); // Output: [10, 20]
