// Find Iterator from Array

const arr = ["a", "b", "c", "d"];
const iArr = arr[Symbol.iterator]();

console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());
console.log(iArr.next());

// { value: 'a', done: false }
// { value: 'b', done: false }
// { value: 'c', done: false }
// { value: 'd', done: false }
// { value: undefined, done: true }
