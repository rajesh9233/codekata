// Ramesh is a student and wants to find out if there is any other student in his class who has got the same marks as his, in maths. Help him to find out.

// Input Description:
// First line contains the number of students in the class followed by Ramesh’s mark. Second line contains the marks of all students in the class.

// Output Description:
// Index of student who got mark same as Ramesh’s mark. If no such mark exists, return -1.

// Sample Input :
// 2 10
// 1 2
// Sample Output :
// -1

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
  const n = userInput[0].split(" ");
  const mark = parseInt(n[1]);
  const arr = userInput[1].split(" ");
  let ans = [];
  arr.forEach((num, i) => {
    if (num == mark) ans.push(i);
  });
  if (ans.length === 0) {
    console.log(-1);
  } else {
    console.log(...ans);
  }
});
