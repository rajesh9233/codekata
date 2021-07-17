// Write a program to get a string as input and reverse the string without using temporary variable.

// Input Description:
// A single line containing a string.

// Output Description:
// Print the reversed string.

// Sample Input :
// GUVI
// Sample Output :
// IVUG

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const values = userInput[0].split("");
  const reverse = values.reverse().join("");
  console.log(reverse)
});