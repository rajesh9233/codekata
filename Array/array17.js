// Given a string S, print it without using semicolon in your program.
// Sample Testcase :
// INPUT
// hello world
// OUTPUT
// hello world

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
  //start-here
  //Your code goes here … replace the below line with your code logic

  console.log(userInput[0]);

  //end-here
});
