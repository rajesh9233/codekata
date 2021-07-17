// Write a code get an integer number as input and print the odd and even digits of the number separately.

// Input Description:
// A single line containing an integer.

// Output Description:
// Print the even and odd integers of the integer in a separate line.

// Sample Input :
// 1234
// Sample Output :
// 2 4
// 1 3

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
  const num = userInput[0].split('');
  let odd = [];
  let even = [];
  for(let i=0;i<num.length;i++){
      if((parseInt(num[i]))%2===0){
          even.push(num[i]+' ');
      }
      else{
          odd.push(num[i]+' ');
      }
  }
  console.log(even.sort().join("").trim());
  console.log(odd.sort().join("").trim());
});