//  Filter Method
const students = [
  {
    id: 1,
    name: "Alice Johnson",
    gpa: 3.8,
    email: "alice@example.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 2,
    name: "Bob Smith",
    gpa: 3.5,
    email: "bob@example.com",
    due: true,
    dueAmount: 500,
  },
  {
    id: 3,
    name: "Charlie Brown",
    gpa: 3.9,
    email: "charlie@example.com",
    due: false,
    dueAmount: 0,
  },
  {
    id: 4,
    name: "David Williams",
    gpa: 3.2,
    email: "david@example.com",
    due: true,
    dueAmount: 300,
  },
  {
    id: 5,
    name: "Emma Wilson",
    gpa: 3.7,
    email: "emma@example.com",
    due: false,
    dueAmount: 0,
  },
];
const lowGPA = students.filter((value) => value.gpa < 3.6);
// console.log(lowGPA);
// send them inspiring message to study hard and try more
/**
 * ❌ filter() অবজেক্ট পরিবর্তন বা নতুন প্রপার্টি যোগ করতে পারে না।
✅ map() ব্যবহার করলে নতুন Title অ্যাড করা যাবে।
✅ filter() শুধুমাত্র true/false রিটার্ন পেলে কাজ করে।
 */
function isBigEnough(value) {
  return value >= 10;
}
const big = [10, 5, 2, 20, 30, 40].filter(isBigEnough);
console.log(big);
