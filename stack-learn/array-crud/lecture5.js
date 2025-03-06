/** Slice Array into Multiple Array
 *
 */
const arr = [1, 2, 3, 4, 5, 6];
const sliced = arr.slice(1, 3); // inclusive and exclusive
// Clone Array
const cloned = arr.slice();

// Array like objects to Array
function toArray() {
  return Array.prototype.slice.call(arguments);
}
const argArray = toArray(1, 3, 5, "test");
console.log(argArray);
