//  Find Method in Javascript (return the value also we can update and mpdify)
// find method mutable(change the main array)
const tasks = [
  { name: "Buy groceries", isDone: false },
  { name: "Complete project", isDone: true },
  { name: "Call Mom", isDone: false },
  { name: "Pay bills", isDone: true },
  { name: "Exercise", isDone: false },
];
const index1 = tasks.find((item) => item.isDone === true);
index1.name = "IRFAN";
console.log(tasks);
// [
//   { name: 'Buy groceries', isDone: false },
//   { name: 'IRFAN', isDone: true },
//   { name: 'Call Mom', isDone: false },
//   { name: 'Pay bills', isDone: true },
//   { name: 'Exercise', isDone: false }
// ]

// Our find method
const ourFind = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
};
const index2 = ourFind(tasks, (item) => item.isDone === false);
console.log(index2); // { name: "Buy groceries", isDone: false }
