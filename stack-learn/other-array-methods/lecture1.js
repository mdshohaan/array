// Static Method vs Instance Method

const arr = [];
// arr.concat(); // instance method
// Array.from(); // static method

const s1 = Array.from("Irfanul Islam");
// console.log(s1);

const set = new Set(["aa", "vv", "cc", "aa"]);
const s2 = Array.from(set);
// console.log(s2); // [ 'aa', 'vv', 'cc' ]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
const s3 = Array.from(mapper.keys());
// console.log(s3); // [ '1', '2' ]
const s4 = Array.from(mapper.values());
// console.log(s4); // [ 'a', 'b' ]

function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3, 4, 5)); // [ 1, 2, 3, 4, 5 ]

// Using an Arrow function as the map function to
// manipulate the elements
const s5 = Array.from([1, 2, 3], (x) => x + x);
// console.log(s5);

// charAt(index);
// Returns the character at the specified index.
// string
// "Hello".charAt(1) // "e"

// charCodeAt(index);
// Returns the Unicode value (ASCII) of the character at the specified index.
// number
// "Hello".charCodeAt(1) // 101

// (Array.isArray) only return true or false

// Array.of
Array.of(7); // [7]
Array.of(1, 2, 3); // [1,2,3]

// Array
Array(7); // [ <7 empty items> ]
Array(1, 2, 3); // [1,2,3]
