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
