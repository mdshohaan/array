// Array is An Object
const arr = [1, 2, 3];

console.log(typeof arr); // object
console.log(arr.constructor); // function
console.log(arr.constructor.prototype); // []

arr.test = "Test Property";
arr.log = function () {
  console.log(this);
  console.log(this.test);
  console.log(this.length);
  console.log(this[0]);
};
arr.log();
// [ 1, 2, 3, test: 'Test Property', log: [Function (anonymous)] ]
// Test Property
// 3
// 1

let obj = {};
// To distinguish Array and Object
console.log(arr instanceof Array); // true
console.log(obj instanceof Array); // false

console.log(Array.isArray(arr)); // true

console.log(Object.prototype.toString.call(arr)); // [object Array]
console.log(Object.prototype.toString.call(arr) === "[object Array]"); // true
