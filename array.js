// *1. Rest Operator (...)
//*	Collects the remaining elements into a single entity (array or object).
// The rest operator collects multiple elements (or properties) into a single array (or object). It is used in function parameters or destructuring assignments.

//a in Function
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// (b) Rest in Array Destructuring
const fruits = ["apple", "banana", "cherry", "date"];
const [first, ...rest] = fruits;
console.log(first); // 'apple'
console.log(rest); // ['banana', 'cherry', 'date']

// (c) Rest in Object Destructuring
const person = { name: "Alice", age: 25, city: "Paris" };
const { name, ...details } = person;
console.log(name); // 'Alice'
console.log(details); // { age: 25, city: 'Paris' }

//* 2. Spread Operator (...)
// The spread operator expands elements of an array or object into individual values. It is used in array literals, object literals, or function calls.
// Key Use:
//* 	•	Expands elements or properties into their individual components.

// (a) Spread in Function Calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// (b) Spread in Array Literals
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4]

// (c) Spread in Object Literals
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 2, c: 3, d: 4 }

//* in JS fixed array length
array.length = 2 ** 32 - 1; //4294967295
