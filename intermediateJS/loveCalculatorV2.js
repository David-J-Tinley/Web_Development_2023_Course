/*********************************************************************************
 *     File Name           :     /intermediateJS/loveCalculatorV2.js
 *     Created By          :     David J Tinley
 *     Creation Date       :     [2023-12-02 21:42]
 *     Last Modified       :     [2023-12-03 16:18]
 *     Description         :
 **********************************************************************************/

const readline = require(`readline`);

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

    let lovescore = Math.random() * 100;
    lovescore = Math.floor(lovescore) + 1; // 1 - 100

    if (lovescore > 70) {
      console.log(`Your love score is ${lovescore}%, high score.`);
    } else if (lovescore <= 70 || lovescore > 30) {
      console.log(`Your love score is ${lovescore}%, medium score.`);
    } else {
      console.log(`Your love score is ${lovescore}%, not great.`);
    }
    userInput.close();
  } catch (e) {
    console.error("Unable to prompt.", e);
  }
})();

userInput.on("close", () => process.exit(0));
