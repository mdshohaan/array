// Arra Traverse
const arr = [8, 1, 2, 3, 4, 5];
// arr[index];
const x = 1,
  y = 2;
const n = arr[2];
//console.log(arr[x], n); // 2 3

// simple array traverse
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
//  find largest number
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(largest);
