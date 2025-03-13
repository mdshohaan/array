// How to works Sort Method
let numbers = [10, 5, 6, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Will not work perfectly
// numbers.sort()

// We have to define the callback with the condition
// Suppose we want to sort the number in Ascending order
numbers.sort((a, b) => a - b); // here a=20,b=10
// console.log(numbers);

// If we want to sorth strings then what should we do
let strings = ["apple", "Cat", "Ball", "Apple"];

strings.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});
console.log(strings); // [ 'apple', 'Apple', 'Ball', 'Cat' ]
