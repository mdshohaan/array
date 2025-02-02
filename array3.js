const array = ["apple", "banana", "cherry"];
const searchValue = "bana"
const isMatch = array.some(a => a.includes(searchValue))
console.log(isMatch);