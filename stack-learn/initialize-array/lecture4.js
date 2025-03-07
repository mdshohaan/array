//  @title:update array elemets and fill array

//  Array fill manual way
const arr = new Array(10);
for (let i = 0; i < arr.length; i++) {
  arr[i] = false;
}
// console.log(arr);

//  array fill
arr.fill(true);
// console.log(arr);

//   Fill array and update
const response = new Array(10);
response.fill(false);
// 	•	Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
//  •	Math.floor() rounds a number down to the nearest integer.

for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? "X" : "O";
}
// console.log(response);

// array is mutable
const names = ["abir", "akib", "adil"];
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}
update(names);
//console.log(names);
