// Length = lastIndex + 1
// LastIndex = Length - 1

//  array notation
const number = [1, 2, 3, 4, 5];
number[5] = 6; // but this not fair bcz of when we add in an element in dynamic array then we got problem where index or length

number[number.length] = 6; // same output. this is best practise

console.log(number);
