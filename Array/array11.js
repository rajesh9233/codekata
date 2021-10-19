// You are given an array of ids of prisoners. The jail authority found that there are some prisoners of same id. Your task is to help the authority in finding the common ids.

// Input Description:
// First line contains a number ‘n’ representing no of prisoners. Next line contains n space separated numbers.

// Output Description:
// Print the ids which are not unique. Print -1 if all ids are unique

// Sample Input :
// 7
// 1 1 11 121 131 141 98
// Sample Output :
// 1

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
  const n = parseInt(userInput[0]);
  const arr = userInput[1].split(" ");
  let counts = {};
  arr.forEach((num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  const countKeys = Object.keys(counts);
  let result = countKeys.filter((a) => counts[a] > 1);
  console.log(...result);
});
