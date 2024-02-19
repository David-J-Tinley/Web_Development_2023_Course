/*********************************************************************************
 *     File Name           :     guestList.js
 *     Created By          :     David J Tinley
 *     Creation Date       :     [2023-12-05 14:13]
 *     Last Modified       :     [2023-12-05 15:37]
 *     Description         :
 **********************************************************************************/

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

    let isOnList = false;

    let name = await prompt(`Enter your name: `);

    for (let i = 0; i < guestList.length; ++i) {
      if (name === guestList[i]) {
        isOnList = true;
        break;
      }
    }

    if (isOnList === true) {
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
