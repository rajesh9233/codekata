// Shreya is a brilliant girl. She likes to memorize the numbers. These numbers will be shown to her. As an examiner develop an algorithm to test her memory.

// CONSTRAINTS

// 1<=Y,N,T<=1000

// Input Description:
// First line contains no. of test cases(Y). Next line contains a number N. Next line contains n space separated numbers Next line contains a number T denoting the number of questions asked from you regarding the given array. Next line contains T space separated numbers.

// Output Description:
// Print the occurrence of each number if present else “NOT PRESENT”

// Sample Input :
// 10
// 1 1 1 2 2 2 3 8 9 7
// 5
// 1 2 3 0 5
// Sample Output :
// 3 3 1 Not Present Not Present

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
  const arr = userInput[1].split(" ");
  const t = parseInt(userInput[2]);
  const occ = userInput[3].split(" ");
  let counts = {};
  arr.forEach((num) => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  let result = [];
  let countKeys = Object.keys(counts);
  occ.forEach((a) => {
    if (!counts[a]) {
      result.push("Not Present" + " ");
    } else {
      result.push(counts[a] + " ");
    }
  });
  console.log(result.join("").trim());
});
