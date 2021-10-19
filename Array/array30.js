// Rahul is fond of numbers.He is given a list of queries. 1 means store that element,2 means means print the minimum element of the stored list. For more clarity see the input and output example

// Input Description:
// The first line of the input N indicates the size of the query list. For N lines, the queries are given with the format of '1 M', where M indicates the number to be stored and 1 indicates the query type. Similarly, '2' which indicates the type of query and it does not contain M since it is not required by this query type. Briefly saying, '1 M' means store that element M in a list '2' means print the minimum element of stored list

// Output Description:
// Print the minimum element and -1 if there are no elements in stored list if the querytype is 2. Store the given number in the list if the query type is 1.

// Sample Input :
// 5
// 1 60
// 2
// 1 58
// 2
// 1 69
// Sample Output :
// 60 58

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
  let list = [];
  let ans = [];
  for (let i = 1; i <= n; i++) {
    const query = userInput[i].split(" ").map((num) => parseInt(num));
    if (query[0] == 1) {
      list.push(query[1]);
      list.sort((a, b) => a - b);
    } else if (query[0] == 2) {
      ans.push(list[0] ? list[0] : -1);
    }
  }
  console.log(...ans);
});
