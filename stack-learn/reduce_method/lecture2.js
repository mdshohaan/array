// Accumulate - gather togather
const numbers = [8, 1, 2, 3, 4, 5, 6];

function sumFuncs(accumulator, currentValue, index) {
  console.log(`Index:${index},Acc:${accumulator},Cur:${currentValue}`);
  return accumulator + currentValue;
}
const sum = numbers.reduce(sumFuncs, 10);
console.log(sum);
// End result depend on initail value and acc statrt on the inital value

// Index:0,Acc:10,Cur:8
// Index:1,Acc:18,Cur:1
// Index:2,Acc:19,Cur:2
// Index:3,Acc:21,Cur:3
// Index:4,Acc:24,Cur:4
// Index:5,Acc:28,Cur:5
// Index:6,Acc:33,Cur:6
