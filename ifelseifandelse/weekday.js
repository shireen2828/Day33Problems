let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("enter the number: ",function(number)
{
if (number == 1)
console.log("Sunday");
else if (number == 2)
console.log("Monday");
else if (number == 3)
console.log("Tuesday");
else if (number == 4)
console.log("Wednesday");
else if (number == 5)
console.log("Thursday");
else if (number == 6)
console.log("Friday");
else
console.log("Saturday");
process.exit();
});
