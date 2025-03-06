// Add Element in Array
const arr1 = [1, 2, 3, 4];
const arr2 = [7, 8, 9];
// insert at the end use push method
arr1[arr1.length] = 10;

arr1.push(...arr2); // best practise

arr1.push(11, 12);
//  Old method use prototype
Array.prototype.push.apply(arr1, arr2);

// use Unshift add at the beginning
arr1.unshift(...arr2);
// use splice to insert the given index
arr1.splice(1, 0, 100);

console.log(arr1);
