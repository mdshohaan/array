// Array Push and Pull Method
const Stack = require("./lecture1");

const stack = new Stack(); // Create an empty stack
const text = "Hello"; // The input string

// Step 1: Push each character of 'text' into the stack
for (let i = 0; i < text.length; i++) {
  stack.push(text.charAt(i)); // Store characters in stack
}

// Step 2: Pop characters from the stack and build the reversed string
let reversedText = "";
while (!stack.isEmpty()) {
  reversedText += stack.pop(); // Remove top element and add to result
}

console.log(reversedText); // Output: "olleH"

// JavaScript Array Stack Methods
const text1 = "HELLO";
const jsStack = [];
for (let i = 0; i < text1.length; i++) {
  jsStack.push(text1[i]); // (text.chartAt(i)) same
}
console.log("JS", jsStack);

let results = "";
while (jsStack.length) results += jsStack.pop();
console.log(results);

/**	charAt(i) returns "" (empty string) if the index is out of bounds.•	
  * text[i] returns undefined.
	* let text = "Hello";
    console.log(text.charAt(10)); // Output: "" (empty string) Old and safe
    console.log(text[10]);        // Output: undefined modern and simplier
 */
