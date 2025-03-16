//  @Title - Copy Array Element
const arr = [1, 2, 3, 4];
// Using For Loop

// Copy
const arr2 = arr;
arr2.push(5);
// console.log(arr, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] to catch referrence

// Spread Operator (Shoallow Copy)
const arr3 = [...arr, 6];
// console.log(arr, arr3);

let obj1 = { name: "Alice", address: { city: "Dhaka" } };
let obj2 = { ...obj1 }; // Shallow copy

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

// 	•	Shallow copy শুধু প্রথম স্তরের কপি করে, কিন্তু nested objects-এর রেফারেন্স ধরে রাখে।
//	•	Deep copy করলে সম্পূর্ণ নতুন কপি তৈরি হয় এবং nested objects আলাদাভাবে সংরক্ষিত থাকে।
