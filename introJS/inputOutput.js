const readline = require("readline");

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => userInput.question(query, resolve));

const correctNames = ["dtinley", "tinman11537"];

(async () => {
  try {
    let userName;
    while (true) {
      userName = await prompt(`Input your username: `);
      if (userName == correctNames[0] || userName == correctNames[1]) {
        break;
      } else {
        console.log("Incorrect user name.\nTry again...");
      }
    }
    console.log(`Welcome ${userName}`);
    userInput.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

userInput.on("close", () => process.exit(0));
