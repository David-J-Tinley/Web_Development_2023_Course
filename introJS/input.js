const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));

(async () => {
  try {
    const tweet = await prompt(`Input your tweet: `);
    if (tweet.length > 140) {
      console.log("Your tweet exceeded 140 characters...");
      console.log(`It was ${tweet.length} characters`);
    }
    console.log(tweet.slice(0, 140));
    input.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

input.on("close", () => process.exit(0));
