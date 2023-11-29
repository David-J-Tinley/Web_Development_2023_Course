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

(async () => {
  try {
    let dogAge = await prompt(`Input your dogs age: `);
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Your dog is ${humanAge} years old in human years.`);
    input.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

input.on("close", () => process.exit(0));
