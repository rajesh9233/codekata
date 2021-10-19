// You are given an array. Your task is to sort the array in given manner. Print the elements in increasing order of the frequency. If frequency is same print smaller one first.

// Input Description:
// You are given a number ‘n’. Then in next line n space separated numbers.

// Output Description:
// Print the array as mentioned

// Sample Input :
// 4
// 1 1 3 2
// Sample Output :
// 2 3 1

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
  let count = {};

  arr.forEach((num) => {
    count[num] = count[num] ? count[num] + 1 : 1;
  });
  const countKeys = Object.keys(count);
  const countValues = Object.values(count);
  let result = countKeys.sort((a, b) => {
    if (count[a] < count[b]) return -1;
    if (count[a] > count[b]) return 1;
    return 0;
  });
  console.log(...result);
});
