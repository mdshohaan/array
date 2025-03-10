/** Array FlatMap
 *
 */
const numbers = [1, 2, 3, 4, 5, 6];

const Map = numbers.map((x) => [x * 2]).flat();
// console.log(Map); // [ 2, 4, 6, 8, 10, 12 ]

const flatMap = numbers.flatMap((x) => x * 2);
// console.log(flatMap); // [ 2, 4, 6, 8, 10, 12 ]

const reduceFlatmap = numbers.reduce((acc, curr) => {
  return acc.concat(curr, curr * 2);
}, []);
console.log(reduceFlatmap);
