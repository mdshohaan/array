//  array of functions
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const funcs = [sum, sub, mul, div];
const a = 10,
  b = 20;

//  loop and call all functions from an array
for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  console.log(`${funcs[i].name}: ${result}`);
}
//     Each function in the funcs array is referenced by its variable name.
// 	•	sum.name returns "sum"
// 	•	sub.name returns "sub"
// 	•	mul.name returns "mul"
// 	•	div.name returns "div
//    Named functions retain their .name property.
// 	•	Anonymous functions (like const fn = function() {}) return an empty string ("").
// 	•	Arrow functions inherit the name from their assigned variable.

//  Array of Arrays Multi Dimensional Array
const pointTable = [
  [1, 2],
  [2, 4],
  [4, 7],
  [10, 20],
];
//  One Dimensional Traverse
for (let i = 0; i < pointTable.length; i++) {
  console.log(`${i}:  x=${pointTable[i][0]},  y=${pointTable[i][1]}`);
}
//  Two Dimensional Traverse
