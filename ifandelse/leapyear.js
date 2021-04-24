let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("enter the year",function(year)
{
	if(((year % 400) == 0) || ((year %  4) == 0) && ((year %  100) !=  0))
	console.log("it is a leap year");
	else
	console.log("its not a leap year");
process.exit
});
