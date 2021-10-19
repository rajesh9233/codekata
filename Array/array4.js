// You are provided with an array in which all elements are repeated thrice except one which is repeated twice.Your task is to print that number.

// O(n) time and O(1) extra space

// Input Description:
// First line contains a number denoting size of array ‘n’.Next line contains n space separated numbers

// Output Description:
// Print the number which is repeated twice

// Sample Input :
// 5
// 13 12 13 12 13
// Sample Output :
// 12

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const n = userInput[0];
  const arr = userInput[1].split(" ");
  let counts = {};
  arr.forEach((num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  const countKeys = Object.keys(counts);
  let result = countKeys.filter((a) => counts[a] === 2);
  console.log(...result);
});
