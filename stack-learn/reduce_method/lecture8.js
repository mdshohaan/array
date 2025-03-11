//  Matrix Sum
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
  return acc.map((v, i) => curr[i] + v);
});
console.log(sumV);
