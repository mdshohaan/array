// Prototype Of an Array

const arr = [1, 2, 3, 4, 5];
// console.log(arr.constructor.prototype);
// console.log(Array.prototype);
// console.log(Object.getOwnPropertyNames(Array.prototype));

Array.prototype.log = function () {
  console.log(this.join(" | "));
};
arr.log();

//  Callback funcs Use
Array.prototype.loop = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.loop((v) => {
  console.log(` V = ${v * 5}`);
});
