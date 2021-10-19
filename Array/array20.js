// You are given an array of numbers. Print the least occurring element. If there is more than 1 element print all of them in decreasing order of their value.

// Input Description:
// You are given a number ‘n’ denoting size of array. Next line contains n space separated numbers.

// Output Description:
// Print the number as mentioned

// Sample Input :
// 9
// 1 6 4 56 56 56 6 4 2
// Sample Output :
// 2 1

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
  const arr = userInput[1].split(" ").map((num) => parseInt(num));
  let counts = {};
  arr.forEach((num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  const countKeys = Object.keys(counts);
  const countValues = Object.values(counts);
  let min = Math.min(...countValues);
  let result = countKeys.filter((n) => counts[n] === min).sort((a, b) => b - a);
  console.log(...result);
});
