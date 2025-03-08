class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  // Add elemnt to Top of Stack
  push(elemnt) {
    this.items[this.count] = elemnt;
    console.log(`${elemnt} Added to ${this.count}`);
    this.count += 1;
    return this.count - 1;
  }
  //  Return and Remove Top Element in Stack
  //  Return undefined if stack is empty
  pop() {
    if (this.count === 0) return undefined;
    let deletedItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`Deleted Item ${deletedItem}`);
    return deletedItem;
  }
  // check the Top Element
  peek() {
    console.log(`Top elemnt is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }
  // Check Stack is Empty
  isEmpty() {
    console.log(this.count === 0 ? "Stack is empty" : "Stack is Not empty");
    return this.count === 0;
  }
  size() {
    console.log(`Stack is size ${this.count}`);
    return this.count;
  }
}
const stack = new Stack();
stack.isEmpty();
stack.push(20);
stack.push(30);
stack.push(30);
stack.pop();
stack.peek();
stack.pop();
stack.size();
stack.isEmpty();
