// Iterating Logic => Business Logic

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

function logic(value, index, arr) {
  // console.log(value, index, arr);
}
function log(value) {
  // console.log(value);
}
// reuse(["aaa", "bbbb"], logic);
// reuse(["A", "B", "C"], logic);

// My forEach Function
function myForeach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
myForeach(numbers, function sumFunc(v, i) {
  sum += v;
});
console.log(sum);

const names = ["ABir", "Akib", "Adil"];
myForeach(names, (value, index) => {
  console.log(`${index + 1}: ${value}`);
});

// JS Build in forEach method
names.forEach((value, index) => {
  console.log(` Build In ForEach -${index + 1}: ${value}`);
});
