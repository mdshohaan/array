// Accumulate - gather togather
const numbers = [8, 1, 2, 3, 4, 5, 6];

function sumFuncs(accumulator, currentValue, index) {
  console.log(`Index:${index},Acc:${accumulator},Cur:${currentValue}`);
  return accumulator + currentValue;
}
const sum = numbers.reduce(sumFuncs, 10);
console.log(sum);
// End result depend on initail value and acc statrt on inital value
