//  Grouping Similar Items
const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];
const group = words.reduce((acc, curr) => {
  const len = curr.length;
  if (acc[len]) {
    acc[len].push(curr); // If the length exists, add the word to the array
  } else {
    acc[len] = [curr]; // If not, create a new array with the word
  }
  return acc;
}, {});
console.log(group);
