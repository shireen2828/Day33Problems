function PalindromCheck(num) {
	let number = num;
	let isPalindrom = true;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if (final != temp) {
		isPalindrom = false;
	}
	return isPalindrom;
}
if (PalindromCheck(num)) {
	if (PrimeCheck(num)) {
		console.log("the Number is palindrom and prime")
	} else
		console.log("the Number is palindrom but not prime")
} else
	console.log("the Number is not palindrom")


    process.exit();
});
