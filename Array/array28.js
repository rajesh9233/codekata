// You are given two arrays of equal length. Your task is to merge the two arrays then sort them too and then find the sum of two middlemost elements.

// Input Description:
// You are given a number ‘n’. Then Next line contains first list of 'n' separated numbers.Third line contains second list of 'n' space separated numbers.

// Output Description:
// Print the sum of two middle elements

// Sample Input :
// 5
// 1 9 16 25 46
// 2 3 4 5 6
// Sample Output :
// 11

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
  const arr1 = userInput[1].split(" ").map((num) => parseInt(num));
  const arr2 = userInput[2].split(" ").map((num) => parseInt(num));
  let numArr = [...arr1, ...arr2];
  numArr.sort((a, b) => a - b);
  console.log(numArr[n] + numArr[n - 1]);
});
