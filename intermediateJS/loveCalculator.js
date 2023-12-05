//
//
//
//
//
// var n = Math.random();
//
// n = n * 100;
//
// n = Math.floor(n) + 1;

const readline = require("readline");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => userInput.question(query, resolve));

(async () => {
  try {
    await prompt(`Enter your name: `);
    await prompt(`Enter your crushes name: `);
    let score = Math.random();
    score = score * 100;
    score = Math.floor(score) + 1;
    console.log(`Your love score is ${score}%.`);
    userInput.close();
  } catch (e) {
    console.error("Unable to prompt.", e);
  }
})();

userInput.on("close", () => process.exit(0));
