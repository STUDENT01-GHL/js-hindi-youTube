const accountId = 14435
let emailId = "sgohel12@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

let accountstate;

// accountId = 2 //  not allowed

console.log(accountId);

emailId = "123@gmail.com"
accountPassword = "212121211"
accountCity = "Baroda"

console.table([accountId , emailId , accountPassword , accountCity , accountstate]);

// here scope is curly braces {   }

/*
Prefer not to  use var
because of issue in block scope and functional scope
*/
