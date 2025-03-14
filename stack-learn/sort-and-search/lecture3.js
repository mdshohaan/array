// Understand and Implement Linear Search
const arr = [1, 3, 45, 67, 534, 78, 97, 54];
const data = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Emma" },
];

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};
const s1 = linearSearch(arr, 67);
console.log(s1);

const linearSearchCB = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
  return -1;
};
// here loop start and cb(arr[i]) pass to callback and check with item then return i

const s3 = linearSearchCB(data, (item) => item.name === "Alice");
console.log(s3);
const s4 = linearSearchCB(data, (item) => item.id === 2);
console.log(s4);
