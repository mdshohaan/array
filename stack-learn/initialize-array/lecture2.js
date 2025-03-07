// Constructor pattern
const a1 = new Array(5);
console.log(a1.length); // 5
const a2 = new Array(1, 2, 3, 4, 5);
console.log(a2); //[1,2,3,4,5]

// Factory pattern (just omit the 'new' Keyword)
const b1 = Array(5);
console.log(b1.length); // 5
const b2 = Array(1, 2, 3, 4, 5);
console.log(b2); //[1,2,3,4,5
// console.log(a1.__proto__.constructor); // [Function: Array] use in testing purpose
