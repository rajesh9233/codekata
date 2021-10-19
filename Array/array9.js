// Pk finds it difficult to judge the minimum element in the list of elements given to him. Your task is to develop the algorithm in order to find the minimum element.

// Note:Don’t use sorting

// Input Description:
// You are given ‘n’ number of elements. Next line contains n space separated numbers.

// Output Description:
// Print the minimum element

// Sample Input :
// 5
// 3 4 9 1 6
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
  const n = userInput[0];
  const arr = userInput[1].split(" ");
  let ans = parseInt(arr[0]);
  arr.forEach((num) => {
    if (ans > parseInt(num)) {
      ans = parseInt(num);
    }
  });
});
