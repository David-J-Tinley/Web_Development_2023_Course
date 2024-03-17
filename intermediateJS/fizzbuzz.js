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

// function fizzBuzz(number) {
//     console.log(number);
//     return number += 1;
// }

let count = 1;
let output = [];
function fizz() {
    if (count % 3 == 0 && count % 5 == 0) {
        output.push("fizzbuzz");
    } else if (count % 3 == 0) {
        output.push("fizz");
    } else if (count % 5 == 0) {
        output.push("buzz");
    } else {
        output.push(count);
    }
    console.log(output);
    count++;
}

(async () => {
    try {
        // let func = await prompt("Enter fizzbuzz: ");
        // let num = 0;
        // do {
        //     num = fizzBuzz(num);
        //     func = await prompt("Enter fizzbuzz or 0 to quit: ");
        // } while (func == "fizzbuzz");
        let func = await prompt("Enter fizzbuzz(): ");
        do {
            fizz();
            func = await prompt("Enter fizzbuzz() or 0 to quit: ");
        } while(func == "fizzbuzz()");

        input.close()
    } catch (e) {
        console.log("Error");
    }
}) ();

input.on("close", () => process.exit(0));

