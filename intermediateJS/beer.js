//
//
//
//
//

const readline = require("readline")

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const prompt = (query) =>
    new Promise((resolve) => input.question(query, resolve));

(async () => {
    try {
        let beers = 99;
        while (beers > 0) {
            console.log(`\n${beers} bottles of beer on the wall, ${beers} bottles of beer.
            \nTake one down pass it around ${beers - 1} bottles of beer on the wall.`);
            --beers;
        }
        input.close();
    } catch (e) {
        console.log("Error");
    }
}) ();

input.on("close", () => process.exit(0));