// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});
const monthsWithDays = [31,28,31,30,31,30,31,31,30,31,30,31]
inp.on("close", () => {
    const month = parseInt(userInput[0]);
    if(month<=0 || month > 12){
        console.log("Error");
    }else {
        console.log(monthsWithDays[month-1]);
    }
});