// @Title: Matrix Sum
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Horizontal sum
const sumH = matrix.map((row) => {
  return row.reduce((a, b) => a + b);
});
console.log(sumH);

// Vertical Sum
const sumV = matrix.reduce((acc, curr) => {
  console.log("ACC:", acc, "CURR:", curr);
  return acc.map((v, i) => curr[i] + v);
});
console.log(sumV);
// •	v = 1, i = 0, so curr[0] + v = 4 + 1 = 5
// •	v = 2, i = 1, so curr[1] + v = 5 + 2 = 7
// •	v = 3, i = 2, so curr[2] + v = 6 + 3 = 9

// So, after this map, we get:
//   acc = [5, 7, 9]

// •	v = 5, i = 0, so curr[0] + v = 7 + 5 = 12
// •	v = 7, i = 1, so curr[1] + v = 8 + 7 = 15
// •	v = 9, i = 2, so curr[2] + v = 9 + 9 = 18

// •	map is used to sum corresponding elements from two arrays.
// •	Inside reduce, acc keeps updating as we go through each row.
// •	map ensures that elements in each column are added together.

// Flat Map
const sumFlat = matrix.reduce((acc, curr) => {
  return acc + curr.reduce((a, b) => a + b);
}, 0);
console.log(sumFlat);
