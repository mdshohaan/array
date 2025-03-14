// Implement Binary Search
let numbers = [10, 5, 6, 20, 30, 40, 50, 60, 70, 80, 90, 100];

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

numbers.sort((a, b) => a - b);
const index = binarySearch(numbers, 50);
console.log(index);
