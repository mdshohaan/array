//  findIndex method  in JavaScript
let numbers = [10, 5, 6, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const tasks = [
  { name: "Buy groceries", isDone: false },
  { name: "Complete project", isDone: true },
  { name: "Call Mom", isDone: false },
  { name: "Pay bills", isDone: true },
  { name: "Exercise", isDone: false },
];

const index1 = numbers.findIndex((item) => item === 40);
console.log(index1);
const index2 = tasks.findIndex((item) => item.isDone === true);
console.log(index2);
