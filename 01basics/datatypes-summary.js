// primitive

//7 types: String , Number , Boolean , null , undefined , Symbol , BigInt


// Is JavaScript Dynamically typed or Statically typed language

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

let bigNumber =54236675347646n   // in bigInt , You have to write n after a big number
console.log(bigNumber);



//reference (Non-primitive)

// Array , Objects , Functions

// arrays

const heros = ["Tiger Shroff" , "Varun Dhavan" , "Akshay Kumar"];

// Objects

let myInformation = {
    name: "Suhani",
    age: 21,
}

//Functions

const myFunction = function() {
      console.log("Hello World");  
}

console.log(typeof bigNumber);
