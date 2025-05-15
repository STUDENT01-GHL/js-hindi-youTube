

// function sayName() {
// console.log("S");
// console.log("U");
// console.log("H");
// console.log("A");
// console.log("N");
// console.log("I");
// }

// sayName()

// function addNumbers(num1 , num2) {
//     console.log(num1 + num2);
// }

function addNumbers(num1 , num2) {
    // let result = num1 + num2
    // return result                 // we can not print any value after return keyword

    return num1 + num2
}

 const result = addNumbers(10 , "21")
//  console.log( "Result is:" , result);
 

function loginUserMsg(username) {
    if(username === undefined) {
           console.log("Please Enter a valid name");
      }

      else {
    return `${username} is just logged in`
        }
    }

 console.log(loginUserMsg("Suhani"));    // in this we have given instructions for print the message
  console.log(loginUserMsg(" "));
   console.log(loginUserMsg());   // output will be undefined
  