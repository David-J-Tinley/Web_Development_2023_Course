//
//
//
//
//

const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));

// BMI function
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
    // Error catching
    console.log("Unable to prompt.", e);
  }
})();

input.on("close", () => process.exit(0));
