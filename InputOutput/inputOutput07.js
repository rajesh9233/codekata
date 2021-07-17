// Write a code to get the input in the given format and print the output in the given format

// Input Description:
// A single line contains a string.

// Output Description:
// Print the characters in a string separated by space.

// Sample Input :
// guvi
// Sample Output :
// g u v i


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
  let values = userInput[0].split('');
  let words='';
  for(let i=0;i<values.length;i++){
      words += values[i]+' ';
  }
  console.log(words.trim())
});