// Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

// Input Description:
// A single line containing 2 integers separated by space.

// Output Description:
// Print the HCF of the integers.

// Sample Input :
// 2 3
// Sample Output :
// 1

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
  const values = userInput[0].split(" ");
  const a = parseInt(values[0]);
  const b = parseInt(values[1]);
  let ans = 1;
  let highest = a;
  if(b>a){
      highest = b;
  }
  for(let i=1;i<=highest/2;i++){
      if(a%i===0 && b%i=== 0){
          ans = i;
      }
  }
  console.log(ans);
});