const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = (query) =>
  new Promise((resolve) => input.question(query, resolve));
//

(async () => {
  try {
    let guestList = [
      "David",
      "Hilary",
      "Brienne",
      "Pavan",
      "Alyssa",
      "Sarah",
      "Rae",
    ];

    let name = await prompt(`Enter your name: `);

    if (guestList.includes(name)) {
      console.log(`Welcome ${name}.`);
    } else {
      console.log(`Sorry ${name}, you are not on the list.`);
    }
  } catch (e) {
    console.log("Unable to prompt.", e);
  }
  input.close();
})();

input.on("close", () => process.exit(0));
