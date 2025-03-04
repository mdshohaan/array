// arra of object
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const funcs = [sum, sub, mul, div];
const a = 10,
  b = 20;

for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  console.log(`${funcs[i].name}: ${result}`);
}
