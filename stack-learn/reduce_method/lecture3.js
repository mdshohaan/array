/** Example Array Flatten
 *
 */
let nestedArray = [[1, 2], 3, 4, [5, 6]];
// Array Flat Method
const arrayFlat = nestedArray.flat();
console.log(arrayFlat);

// We can do same thing using Reduce Method
const arrayFlat1 = nestedArray.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
console.log(arrayFlat1);
