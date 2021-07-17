// Write a code to get the input in the given format and print the output in the given format

// Input Description:
// First-line indicates two integers separated by space. Second-line indicates three integers separated by space. Third-line indicates three integers separated by space

// Output Description:
// Print the input in the same format.

// Sample Input :
// 2 5
// 2 5 6
// 2 4 5
// Sample Output :
// 2 5
// 2 5 6
// 2 4 5

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
  for(let i=0;i<userInput.length;i++){
      console.log(userInput[i])
  }
});