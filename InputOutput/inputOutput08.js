// Write a code to get the input in the given format and print the output in the given format.

// Input Description:
// A single line contains three float values separated by space.

// Output Description:
// Print the float value separated by line.

// Sample Input :
// 2.3 4.5 7.8
// Sample Output :
// 2.3
// 4.5
// 7.8


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
  for(let i=0;i<userInput.length;i++){
    let num = userInput[i].split(' ')
    for(let j=0;j<num.length;j++){
        console.log(num[j])
    }
  }
});