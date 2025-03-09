//  Map Method Related
const names = [
  "Stack learner",
  "Stack school",
  "Stack line",
  "Stack consultant",
];
//  reuse function
function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}
// Example One
const result1 = [];
reuse(names, (value) => {
  return result1.push(value.length);
});
// console.log(result1);

// Iterating like Map function
function resueAndMap(arr, logic) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(logic(arr[i], i, arr));
  }
  return result;
}
const lengths = resueAndMap(names, (value) => value.length);
const uppercase = resueAndMap(names, (value) => value.toUpperCase());
// console.log(lengths);
// console.log(uppercase);

// Javascript Build in Map Method
const lenghts1 = names.map((value) => value.length);
// console.log("Build in Method", lenghts1);

const students = [
  { id: 1, name: "Alice Johnson", gpa: 3.8, email: "alice@example.com" },
  { id: 2, name: "Bob Smith", gpa: 3.5, email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", gpa: 3.9, email: "charlie@example.com" },
  { id: 4, name: "David Williams", gpa: 3.2, email: "david@example.com" },
  { id: 5, name: "Emma Wilson", gpa: 3.7, email: "emma@example.com" },
];
const mappedStudents = students.map((value) => {
  return {
    ...value,
    Title: `Hello ${value.name} Your Result has been Published`,
    msg: `You have got ${value.gpa >= 3.5 ? "Passed" : "Failed"}`,
  };
});
// console.log(mappedStudents);
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt); // numbers.map((num) => Math.sqrt(num)); same output

function r(num) {
  return num * 10;
}
const mult = numbers.map(r); //map(r) দেওয়া মানেই map() প্রতিটি উপাদানের জন্য r(num) কল করবে।
console.log(mult);
