let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("enter the numeric value of month date: ",function(month,date)
{
	if((month == "3" && day > "20") || (month > "3" && month < "6") || (month == "6" && day < "20"))
	console.log("True");
	else
	console.log("False");
process.exit();
});

