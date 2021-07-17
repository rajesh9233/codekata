// Write a code get an integer number as input and print the sum of the digits.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the sum of the digits of the integer.

// Sample Input :
// 124
// Sample Output :
// 7

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
  const n = userInput[0];
  let sum = 0;
  for(let i=0;i<n.length;i++){
      sum+=parseInt(n[i]);
  }
  console.log(sum);
});