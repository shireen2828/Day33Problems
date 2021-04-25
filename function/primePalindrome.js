let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter a number ",function(num) {
// Checks if the number is prime or not
function PrimeCheck(num) {
	let number = num;
	let isPrime = true;
	if (number == 1) {
		console.log("1 is neither prime nor composite number.");
		isPrime = false;
	}
	else if (number > 1) {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}
	}
	return isPrime;
}
