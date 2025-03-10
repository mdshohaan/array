/** Implement Our Own Reduce
 *
 */
function myReduce(arr, cb, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
  }
  return acc;
}
const arr = [1, 2, 3, 4, 5, 6];
const sum = myReduce(
  arr,
  (acc, curr) => {
    return acc + curr;
  },
  0
);
console.log(sum);
