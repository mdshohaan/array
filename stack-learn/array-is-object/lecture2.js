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

// 🔹 Shallow Copy
// একটি shallow copy কোনো অবজেক্ট বা ডাটাসেটের শুধুমাত্র references কপি করে, কিন্তু nested objects (অভ্যন্তরীণ অবজেক্ট) গুলোর আসল রেফারেন্স ধরে রাখে। অর্থাৎ, যদি মূল অবজেক্টের কোনো অভ্যন্তরীণ অবজেক্ট পরিবর্তন করা হয়, তাহলে shallow copy করা অবজেক্টেও সেই পরিবর্তন দেখা যাবে।

let obj1 = { name: "Alice", address: { city: "Dhaka" } };
let obj2 = { ...obj1 }; // Shallow copy

obj2.name = "Bob";
obj2.address.city = "Chittagong";

console.log(obj1); // { name: 'Alice', address: { city: 'Chittagong' } }
console.log(obj2); // { name: 'Bob', address: { city: 'Chittagong' } }
