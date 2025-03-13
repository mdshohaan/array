// Implement Bubble Sort
let myArr = [1, 3, 54, 78, 90, 41, 5];

// Ascending Order
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap in one line
      }
    }
  }
};
bubbleSort(myArr);
console.log(myArr);

// From ChatGPT
const bubbleSort1 = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // অপটিমাইজড লুপ
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap in one line
        swapped = true;
      }
    }
    if (!swapped) break; // যদি কোনো swap না হয়, তাহলে break
  }
  return arr;
};

// টেস্ট করা যাক
console.log(bubbleSort1([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
// 🎯 সংক্ষেপে:
// 	•	বাইরের লুপ (i লুপ) → প্রতিবার অ্যারের একদম শেষের দিকে একটি এলিমেন্টকে সঠিক জায়গায় নেয়।
// 	•	ভিতরের লুপ (j লুপ) → পাশাপাশি এলিমেন্ট চেক করে এবং swap করে।
// 	•	arr.length - 1 - i → যাতে আগে থেকেই সঠিক স্থানে চলে যাওয়া এলিমেন্টকে আবার না চেক করা হয়।

// Descending Order
const bubbleSort2 = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // অপটিমাইজড লুপ
      if (arr[j + 1] > arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]; // Swap in one line
        swapped = true;
      }
    }
    if (!swapped) break; // যদি কোনো swap না হয়, তাহলে break
  }
  return arr;
};
console.log(bubbleSort2([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
