// Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.
// Input Size : N <= 100000
// Sample Testcase :
// INPUT
// 2143
// OUTPUT
// 1 3

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
  const arr = userInput[0].split("").map((num) => parseInt(num));
  let result = arr.filter((num) => num % 2 === 1);
  if (result.length > 0) console.log(...result);
  else console.log(-1);
});
