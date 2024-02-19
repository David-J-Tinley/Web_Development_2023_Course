//
// David J Tinley
// 12/05/2023
// leapYear.js
//

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));

// Leap year formula:
// 1. On every year that is divisible by 4
// 2. EXCEPT every year that is evenly divisible by 100
// 3. UNLESS the year is also evenly divisible by 400

(async () => {
  try {
    let year = await prompt("Enter a year to check if it`s a leap year: ");
    if (year % 4 == 0) {
      // Year is divisible by 4
      if (year % 100 == 0 && year % 400 == 0) {
        // Year is evenly divisible by 100 but also evenly divisible by 400
        console.log(`${year} is a leap year.`);
      } else if (year % 100 == 0) {
        // Year is evenly divisible by 100 only
        console.log(`${year} is not a leap year`);
      } else {
        // Year must be a leap year
        console.log(`${year} is a leap year.`);
      }
    } else {
      console.log(`${year} is not a leap year.`);
    }
    input.close();
  } catch (e) {
    console.log("Unable to prompt.", e);
  }
  input.close();
})();

input.on("close", () => process.exit(0));
