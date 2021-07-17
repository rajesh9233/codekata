// You are given with a number "N", find its cube.

// Input Description:
// A positive integer is provided.

// Output Description:
// Find the cube of the number.

// Sample Input :
// 2
// Sample Output :
// 8

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
  const n = parseInt(userInput[0]);
  console.log(n*n*n);
});