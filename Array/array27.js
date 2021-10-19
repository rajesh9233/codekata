// You are a passport issuer, but due to some problems in the system, there are redundant  passport numbers. Your task is to delete all the duplicate passport numbers. You are given a list of passport numbers.

// Input Description:
// You are given length of list.Second line,You are given with a list.

// Output Description:
// Print the list of passport numbers without duplicates.

// Sample Input :
// 5
// A23 B56 B56 C79 D16
// Sample Output :
// A23 B56 C79 D16

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
  const list = userInput[1].split(" ");
  let result = list.filter((item, index, arr) => arr.indexOf(item) === index);
  console.log(...result);
});
