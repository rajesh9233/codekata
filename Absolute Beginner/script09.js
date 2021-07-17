// You are given Two Numbers, A and B. If C = A + B. Find C.

// Note: Round off the output to a single decimal place.

// Input Description:
// You are provided with two numbers A and B.

// Output Description:
// Find the sum of the two numbers (A + B)

// Sample Input :
// 1
// 1
// Sample Output :
// 2


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
  let A = parseInt(userInput[0]);
  let B = parseInt(userInput[1]);
  let C =A+B;
  console.log(C)
});