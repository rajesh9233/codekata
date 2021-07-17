// You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

// (Print "Error" if N = negative value and 0 if N = 0).

// Input Description:
// An integer N is provided to you as the input.

// Output Description:
// Find the Nth term in the provided series.

// Sample Input :
// 18
// Sample Output :
// 324

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
  let num = parseInt(userInput[0]);
  let ans = 0;
  let count = 0;
  if(num === 0){
   console.log(num)   
  }else if(num < 0){
      console.log("Error");
  }else {
      for(let i=0; count<num;i++){
          if(i%2===1){
              ans=ans+i;
              count++;
          }
      }
      console.log(ans);
  }
});