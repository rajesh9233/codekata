// You are given three numbers A, B & C. Print the largest amongst these three numbers.

// Input Description:
// Three numbers are provided to you.

// Output Description:
// Find and print the largest among the three

// Sample Input :
// 1
// 2
// 3
// Sample Output :
// 3

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
  const a = parseInt(userInput[0]);
  const b = parseInt(userInput[1]);
  const c = parseInt(userInput[2]);
  let ans = a;
  if(b>ans){
      ans = b;
  }
  if(c>ans){
      ans = c;
  }
  console.log(ans);
});