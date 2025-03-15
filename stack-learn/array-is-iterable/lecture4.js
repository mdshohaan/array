//  For of Loop Array (Array Must be Iterable, using for loop)

const arr = ["a", "b", "c"];

const key = arr.keys();
const value = arr.values();
const entries = arr.entries();

const loop = (it, name) => {
  for (let v of it) {
    console.log(`[${name}] - ${v}`);
  }
};
loop(key, "KEYS");
loop(value, "VALUES");
loop(entries, "ENTRIES");

// Direct value
for (const v of arr) {
  console.log(v);
}
