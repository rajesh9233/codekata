// You are given with an circular array .Your task is calculate the difference between two consecutive number. And if difference is greater than ‘k’, print 1 else print 0

// Input Description:
// You are given two numbers ‘n’, ’m’. Next line contains n space separated integers.

// Output Description:
// Print 1 if the difference is greater than ‘m’.

// Sample Input :
// 5 15
// 50 65 85 98 35
// Sample Output :
// 0 1 0 1 0

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
  const first = userInput[0].split(" ");
  const n = parseInt(first[0]);
  const k = parseInt(first[1]);

  const arr = userInput[1].split(" ").map((num) => parseInt(num));
  let result = arr.map((num, i) => {
    //   console.log(arr[i],arr[i+1],k,(arr[i]-arr[i+1]) > k)
    if (i === n - 1) {
      if (Math.abs(arr[n - 1] - arr[0]) > k) return 1;
      else return 0;
    } else if (i < n - 1 && Math.abs(arr[i] - arr[i + 1]) > k) return 1;
    else return 0;
  });
  console.log(...result);
});
