// Implement Binary Search
let numbers = [10, 5, 6, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//   For Numbers
const binarySearch = (arr, key) => {
  let lowest = 0;
  let highest = arr.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);
    if (arr[mid] === key) return mid;
    if (arr[mid] < key) lowest = mid + 1;
    if (arr[mid] > key) highest = mid - 1;
  }
  return -1;
};

numbers.sort((a, b) => a - b); // Sort is mutable
// console.log(numbers); // [5,   6, 10, 20, 30,40,  50, 60, 70, 80,90, 100]
const index = binarySearch(numbers, 10);
// console.log(index);

// For Object Binary Search
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Emma" },
];

const binarySearchObj = (data, targetName) => {
  let lowest = 0;
  let highest = data.length - 1;

  while (lowest <= highest) {
    let mid = Math.floor((lowest + highest) / 2);

    if (data[mid].name === targetName) return mid;
    if (data[mid].name < targetName) lowest = mid + 1;
    if (data[mid].name > targetName) highest = mid - 1;
  }
  return -1;
};

// Make sure the data is sorted alphabetically by name before searching
const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
const result = binarySearchObj(sortedData, "Alice");

console.log(result); // Output: Index of "Alice" in sorted array
