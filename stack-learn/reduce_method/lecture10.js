// Compose Functions

// Understand Compose
const add10 = (n) => n + 10;
const times3 = (n) => n * 3;
const div2 = (n) => n / 2;

const n = 5;
const x = div2(times3(add10(n)));
console.log(x);

// Pipe Function - shortest way
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), n);
const r1 = pipe(add10, times3, div2)(x);
console.log(r1);

// Compose Function long way
