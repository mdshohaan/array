// Keys,value,entries

const arr = ["a", "b", "c"];
const key = arr.keys();
const value = arr.values();
const entries = arr.entries();

console.log(key.next());
console.log(value.next());

console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
console.log(entries.next());
// { value: [ 0, 'a' ], done: false }
// { value: [ 1, 'b' ], done: false }
// { value: [ 2, 'c' ], done: false }
// { value: undefined, done: true }
