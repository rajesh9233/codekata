// You are a software engineer at an MNC. You are given the task of sorting the employees in your company based on their salary. Perform the task so that the employees, including yourself, will get a bonus from the management.

// CONSTRAINT:

// 0<=salary<=1000000

// Input Description:
// Number of employees followed by their name and salary

// Output Description:
// Sorted list of employee names

// Sample Input :
// 3
// Karthik 23000 rohan 81734 varshini 12343
// Sample Output :
// varshini
// Karthik
// Rohan

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
  let salaries = [];
  arr.forEach((a, i) => {
    if (i % 2 === 0) {
      salaries.push({ name: a, salary: parseInt(arr[i + 1]) });
    }
  });
  let result = salaries
    .sort((a, b) => a.salary - b.salary)
    .map((emp) => emp.name);
  result.forEach((emp) => console.log(emp));
});
