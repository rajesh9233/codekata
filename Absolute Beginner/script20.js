// Let "A" be a year, write a program to check whether this year is a leap year or not.

// Print "Y" if its a leap year and "N" if its a common year.

// Input Description:
// A Year is the input in the form of a positive integer.

// Output Description:
// Print "Y" if its a leap year and "N" if its a common year.

// Sample Input :
// 2020
// Sample Output :
// Y


// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  const a = parseInt(userInput[0]);
  if(a%4===0){
      console.log('Y');
  }else {
      console.log('N');
  }
});