// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

// Input Description:
// A positive integer is provided to you as an input.

// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.

// Sample Input :
// 2
// Sample Output :
// 2 4 6

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
  let num = parseInt(userInput[0]);
  let first = num+num;
  let second = first+num;
  console.log(num+" "+first+" "+second)
});