const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));

(async () => {
  try {
    let userName = await prompt(`Input your name in lower case: `);
    let firstLetter = userName.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    userName = userName.slice(1, userName.length);
    userName = userName.toLowerCase();

    console.log(`${firstLetter}${userName}`);
    input.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

input.on("close", () => process.exit(0));
