/**  Understand the Concept of Reduce
 *
 */
// Implementing Sum
let numbers = [1, 2, 3, 4, 5];

function sunFuncs(a, b) {
  return a + b;
}
const sum = numbers.reduce(sunFuncs);
// const sumFunc = numbers.reduce((a, b) => a + b);
// console.log(sum);

// Implementing Average
const avg = numbers.reduce((acc, curr, idx, arr) => {
  acc += curr;
  if (idx === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
});
console.log(avg);
