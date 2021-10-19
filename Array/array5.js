// You are given with two arrays. Your task is to merge the array such that first array is in ascending order and second one in descending order.

// Input Description:
// First line contains two integer ‘n’ and ‘m’. ‘n’ denotes length of array 1 and ‘m’ of array 2.Next line contains n space separated numbers and third line contains ‘m’ space separated numbers

// Output Description:
// Print a single array in desired order

// Sample Input :
// 3 3
// 23 15 16
// 357 65 10
// Sample Output :
// 15 16 23 357 65 10

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
  const array1 = stringToIntArray(userInput[1].split(" "));
  const array2 = stringToIntArray(userInput[2].split(" "));
  const ascArray = sortArray(array1, "asc");
  const descArray = sortArray(array2, "desc");
  let output = ascArray;
  output = output.concat(descArray);
  console.log(output.join(" "));
  function stringToIntArray(array) {
    array.forEach((value, i) => {
      array[i] = parseInt(value);
    });
    return array;
  }

  function sortArray(array, type) {
    array.sort((a, b) => {
      return type === "asc" ? a - b : b - a;
    });
    return array;
  }
});
