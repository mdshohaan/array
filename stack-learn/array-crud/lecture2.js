/**update existing elements
 *
 */
// easy one
const numbers = [1, 2, 7];
numbers[2] = 3;

// Array of objects
const people = [
  { id: 1, city: "New York" },
  { id: 2, city: "Los Angeles" },
  { id: 3, city: "Chicago" },
];
const givenID = 3,
  updatedName = "Bangladesh";

for (let i = 0; i < people.length; i++) {
  if (givenID === people[i].id) {
    people[i].city = updatedName;
  }
}
console.log(people);
