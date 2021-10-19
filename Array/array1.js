// Assume you are a student studying in school.You are given a task to find first negative integer for each and every window of size k.

// Input Description:
// First line contains an integer n denoting the size of the array. The next line contains n space separated integers forming the array. The last line contains the window size k.

// Output Description:
// Print the first negative integer in that window.If all the numbers are positive print 0

// Sample Input :
// 7
// 1 -2 -3 -4 5 6 -7
// 3
// Sample Output :
// -2 -2 -3 -4 -7

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
  const k = parseInt(userInput[2]);
  let ans = [];
  for (let i = 0; i <= n - k; i++) {
    for (let j = i; j < i + k; j++) {
      if (arr[j] >= 0 && arr[j + 1] >= 0 && arr[j + 2] >= 0) {
        ans.push(0 + " ");
        break;
      } else if (arr[j] < 0) {
        ans.push(arr[j] + " ");
        break;
      }
    }
  }
  console.log(ans.join("").trim());

  //end-here
});
