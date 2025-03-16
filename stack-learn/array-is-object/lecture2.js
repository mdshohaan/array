//  @Title - Copy Array Element
const arr = [1, 2, 3, 4];
// Using For Loop

// Copy
const arr2 = arr;
arr2.push(5);
// console.log(arr, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] to catch referrence
// console.log(arr === arr2); // true

// Spread Operator (Shoallow Copy)
const arr3 = [...arr, 6];
// console.log(arr, arr3);

let obj1 = { name: "Alice", address: { city: "Dhaka" } };
let obj2 = { ...obj1 }; // [Shallow copy]

obj2.name = "Bob";
obj2.address.city = "Chittagong";
// console.log(obj1); // { name: 'Alice', address: { city: 'Chittagong' } }
// console.log(obj2); // { name: 'Bob', address: { city: 'Chittagong' } }

// Object.assign() used to copy
const points = [
  [10, 20],
  [30, 40],
];
const pointsCopy = Object.assign([], [...points]);
pointsCopy.push([50, 60]);
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 120;
console.log(points); // [ [ 100, 120 ], [ 30, 40 ] ]
console.log(pointsCopy); // [ [ 100, 120 ], [ 30, 40 ], [ 50, 60 ] ]

// 	•	[Shallow copy] শুধু প্রথম স্তরের কপি করে, কিন্তু nested objects-এর রেফারেন্স ধরে রাখে।
//	•	Deep copy করলে সম্পূর্ণ নতুন কপি তৈরি হয় এবং nested objects আলাদাভাবে সংরক্ষিত থাকে।
//  Primitive value হলো এমন ডাটা যা immutable (পরিবর্তনযোগ্য নয়)

// [].map -[shallow copy]
const arr4 = arr.map((x) => x); // [ 1, 2, 3, 4, 5 ]
// console.log(arr === arr4); // false

// [].Filter -[shallow copy]
// const arr5 = arr.filter((x) => x); Or,
const arr5 = arr.filter(() => true); // [ 1, 2, 3, 4, 5 ]

// [].Slice -[shallow copy]
const arr6 = arr.slice(); // [ 1, 2, 3, 4, 5 ]

// [].concat -[shallow copy]
const arr7 = arr.concat(); // [ 1, 2, 3, 4, 5 ]

// Array.from -[shallow copy]
const arr8 = Array.from(arr); // [ 1, 2, 3, 4, 5 ]

// Deep copy
const pointsDeepCopy = JSON.parse(JSON.stringify(points)); // [ [ 100, 120 ], [ 30, 40 ] ]
pointsDeepCopy[0][0] = 200;
pointsDeepCopy[0][1] = 202;
console.log(pointsDeepCopy); // [ [ 200, 202 ], [ 30, 40 ] ]
console.log(points); // [ [ 10, 20 ], [ 30, 40 ] ]
