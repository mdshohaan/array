//  Some and Every Method
function isOdd(element, index, arr) {
  return element % 2 === 1;
}
function geeks() {
  let arr = [6, 1, 8, 32, 35];
  let value = arr.some(isOdd);
  // let value = arr.every(isOdd);
  console.log(value);
}
geeks();
