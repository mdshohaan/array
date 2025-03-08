/**  Array Push And Shift Methods
 *
 */
const Queue = require("./lecture1");

const queue = new Queue();
// queue.enqueue("Task One");
// queue.enqueue("Task Two");
// queue.showQueue();
// queue.dequeue("Task One");
// queue.showQueue();
// console.log(queue);

// Using Javascript Build in Method
const q = [];
q.push("One");
q.push("Two");
q.push("Three");
console.log(q);
q.shift();
q.shift();
console.log(q);
