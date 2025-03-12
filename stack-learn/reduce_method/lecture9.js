//  @Title: Map and Filter using Reduce

const numbers = [1, 2, 3, 4, 5, 6];

// Mapped
const square = numbers.map((a) => Math.pow(a, 2));
const square1 = numbers.map((a) => a ** 2);
const square2 = numbers.map((a) => a * a);

const mapReduce = numbers.reduce((acc, curr) => {
  acc.push(curr * curr);
  return acc;
}, []);
console.log(mapReduce);

//  Odd number find using reduce
const odd = numbers.reduce((acc, curr) => {
  if (curr % 2 === 1) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(odd);

// Big array
const bigArray = [];
for (let i = 0; i < 5000000; i++) {
  bigArray.push(i);
}

// Map and Filter chain  - Time Efficiency
console.time("both");
bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
console.timeEnd("both");

// Map and Filter Reduce - Time Efficiency (less time to load )
console.time("Reduce");
bigArray.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr * 2);
  }
  return acc;
}, []);
console.timeEnd("Reduce");
