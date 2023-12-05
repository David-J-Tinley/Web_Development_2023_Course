/*********************************************************************************
 *     File Name           :     bmi.js
 *     Created By          :     David J Tinley
 *     Creation Date       :     [2023-12-04 05:20]
 *     Last Modified       :     [2023-12-04 19:46]
 *     Description         :
 **********************************************************************************/

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));

function bmiCalculator(weight, height) {
  return Math.round(weight / (height * height));
}

(async () => {
  try {
    let userWeight = await prompt("Enter your weight: ");
    let userHeight = await prompt("Enter your height: ");
    console.log(bmiCalculator(userWeight, userHeight));
    // if (bmiCalculator(userWeight, userHeight) > 100) {
    //   console.log(`Your BMI score is ${bmiCalculator}, ok.`);
    // }
    input.close();
  } catch (e) {
    console.log("Unable to prompt.", e);
  }
})();

input.on("close", () => process.exit(0));
