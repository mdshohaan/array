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
console.log(result1);

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
console.log(lengths);
console.log(uppercase);
