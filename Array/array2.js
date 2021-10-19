// You are given with an array of numbers, Your task is to print the difference of indices of largest and smallest number.All number are unique.

// Input Description:
// First line contains a number ‘n’. Then next line contains n space separated numbers.

// Output Description:
// Print the difference of indices of largest and smallest array

// Sample Input :
// 5
// 1 6 4 0 3
// Sample Output :
// -2

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
  let min = parseInt(arr[0]);
  let max = parseInt(arr[1]);
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (min >= parseInt(arr[i])) {
      min = parseInt(arr[i]);
      minIndex = i;
    }
    if (max <= parseInt(arr[i])) {
      max = parseInt(arr[i]);
      maxIndex = i;
    }
  }
  console.log(maxIndex - minIndex);
});
