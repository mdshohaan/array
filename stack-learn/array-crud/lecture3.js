/**  Delete Specific Element
 *
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.pop(); //   Last element delete
numbers.shift(); //  Remove First Element

//    Remove Inside Element
const toBeDeleted = 5;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === toBeDeleted) {
    numbers.splice(i, 1);
  }
}
//  Filter Array
const toBeDeleted1 = 6;
const fil = numbers.filter((number) => number !== toBeDeleted1);

// Reset Whole Array
let x = [1, 2, 3];
let y = x;
x = [];
console.log(x, y); //  [] [ 1, 2, 3 ]

// Alternative
let xx = [1, 2, 3, 4];
let yy = xx;
xx.length = 0;
console.log(xx, yy); // [] []

console.log(fil);
