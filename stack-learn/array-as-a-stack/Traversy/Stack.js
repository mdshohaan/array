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
}
const stack = new Stack();
stack.push(20);
stack.push(30);
stack.push(30);
stack.pop();
stack.pop();
