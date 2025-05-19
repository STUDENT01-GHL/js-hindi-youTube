let age = 21
if (age > 18) {
    console.log("You can vote");
    } else {
        console.log("You can not vote");
    }

    const balance = 5500
    if (balance < 5000) {
        console.log("greater than 5000");
    } else if (balance < 3000) {
         console.log("greater than 3000");
    } else {
        console.log("less than 6000");
        
    }

    const user = "Suhani"
    const isLoggedFromGoogle = true
    const sufficientBalance = true
    const isLoggedFromGmail = false

    if (isLoggedFromGoogle || sufficientBalance) {
        console.log(`${user} , can make account in bank`);
    }  else if (sufficientBalance || isLoggedFromGmail) {
        console.log(`${name} , can also make an account`);
        
    } else {
        console.log(`${name} , need to have sufficient balance`);
    }