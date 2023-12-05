/*********************************************************************************
 *     File Name           :     leapYear.js
 *     Created By          :     David J Tinley
 *     Creation Date       :     [2023-12-04 20:52]
 *     Last Modified       :     [2023-12-04 21:05]
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
//
//
//
//
//
//

(async () => {
	try {
		let year = await prompt("Enter a year to check if it`s a leap year: ");
	} catch (e) {
	}
	input.close();
}) ():

input.on("close", () => process.exit(0));
