// Write a code to get an integer N and print the sum of  values from 1 to N.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the sum of values from 1 to N.

// Sample Input :
// 10
// Sample Output :
// 55

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
  let ans = 0;
  for(let i=1;i<=n;i++){
      ans+=i;
  }
  console.log(ans);
});