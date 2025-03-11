//  Matrix Sum
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Vertical
const sumH = matrix.map((row) => {
  return row.reduce((a, b) => a + b);
});
console.log(sumH);
