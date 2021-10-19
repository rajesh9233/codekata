// Given 2 numbers N and K followed by elements of N .Print 'yes' if K exists else print 'no'.
// Sample Testcase :
// INPUT
// 4 2
// 1 2 3 3
// OUTPUT
// yes

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
  const arr = userInput[0].split(" ");
  const n = parseInt(arr[0]);
  const k = arr[1];
  const num = userInput[1].split(" ");
  console.log(num.includes(k) ? "yes" : "no");
});
