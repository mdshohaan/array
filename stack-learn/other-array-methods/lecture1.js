// Static Method vs Instance Method

const { array } = require("prop-types");

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
