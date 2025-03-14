// string1.localeCompare(string2)
// The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).

console.log("apple".localeCompare("banana")); // Output: -1 (apple comes before banana)
console.log("grape".localeCompare("banana")); // Output: 1 (grape comes after banana)
console.log("orange".localeCompare("orange")); // Output: 0 (both are equal)

const fruits = ["banana", "apple", "grape", "orange"];
fruits.sort((a, b) => a.localeCompare(b));

console.log(fruits);
// Output: ["apple", "banana", "grape", "orange"]

const data1 = [
  { id: 1, name: "Charlie" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
];

data1.sort((a, b) => a.name.localeCompare(b.name));

console.log(data1);
// Output:
// [
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Bob" },
//   { id: 1, name: "Charlie" }
// ]
