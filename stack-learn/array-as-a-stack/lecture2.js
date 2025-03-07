const Stack = require("./lecture1");

const stack = new Stack();
const text = "Hello";

for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i));
}
let reversedText = "";
while (!stack.isEmpty()) {
  reversedText += stack.pop();
}
console.log(reversedText);
