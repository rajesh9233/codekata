// You are given given task is to print whether array is ‘majestic’ or not.A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.

// Input Description:
// You are given a number ‘n’,Next line contains ‘n’ space separated

// Output Description:
// Print 1 if array is majestic and 0 if it is not

// Sample Input :
// 7
// 1 2 3 4 6 0 0
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
  const arr = userInput[1].split(" ").map((num) => parseInt(num));
  let first = 0;
  let last = 0;
  arr.forEach((item, i) => {
    if (i < 3) first += item;
    if (i >= n - 3) last += item;
  });
  console.log(first === last ? 1 : 0);
});
