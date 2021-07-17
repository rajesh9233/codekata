// Write a code to get an integer N and print the digits of the integer.

// Input Description:
// A single line contains an integer N.

// Output Description:
// Print the digits of the integer in a single line separated by space,

// Sample Input :
// 348
// Sample Output :
// 3 4 8

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
    const n = userInput[0].split('');
    let ans = '';
    for(let i=0;i<n.length;i++){
        ans+=n[i]+' ';
    }
    console.log(ans.trim());
});