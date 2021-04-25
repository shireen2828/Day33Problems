let r1 = require('readline');
let prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter (n)th number ",function(n) {    
    var result = 0;
    var string = null;
    for(i = 1; i <= n; i++)
    {
         result = result + 1/i;
         string = string + " + 1/"+i;
    }
    console.log("H(n) = "+string+" = "+result);
    process.exit();
});
