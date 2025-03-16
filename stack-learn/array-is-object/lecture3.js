// Compare Two Arrays
const arr = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
console.log(arr === arr2); // false

if (JSON.stringify(arr) === JSON.stringify(arr2)) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

/**  @Title -equality Check
 * @param { Array} arr
 * @param { Array} arr2
 */
const compare = (arr, arr2) => {
  if (arr.length !== arr2.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) return false;
  }
  return true;
};
console.log(compare(arr, arr2)); // true
