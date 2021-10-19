// Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
// Sample Testcase :
// INPUT
// hello
// OUTPUT
// he*lo

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
  let word = userInput[0].split("");
  let len = word.length;
  if (len === 1) {
    word[0] = "*";
  } else if (len % 2 === 0) {
    word[len / 2] = "*";
    word[len / 2 - 1] = "*";
  } else {
    word[len / 2] = "*";
  }
  console.log(word.join(""));
});
