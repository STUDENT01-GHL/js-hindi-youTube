let score = false
console.log(typeof score);  // boolean
console.log(typeof (score)); // boolean


let valueInNumber = Number(score)  
console.log(typeof valueInNumber);  // number

console.log(valueInNumber);   // it will be not a number


// "33" => 33
// "33abc" => NaN => not a number 
// true =>1 ; false =>0 


let isLoggedIn = "Suhu"

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);  // true

// 1 => true ; 0 => false



let someNumber = 33
let stringNumber =  String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);    // string



//    Operations   //


let number = 5
let negValue = -number
console.log(negValue);  // -5


console.log(3+3);   // 6
console.log(3-3);   // 0
console.log(3*3);   // 9
console.log(3**3);  // 27
console.log(3/3);   // 1
console.log(3%3);   // 0


let str1 = "hello"
let str2 = " Suhani"
let str3 = str1 + str2
console.log(str3);   // hello suhani


console.log(2 + "4");  // 24
console.log("2" + 4);  //24
console.log("1" + 2 + 2 + "2"); // 1224


console.log(+"");  // 0
console.log(+true);  // 1

let gameCounter = 100  
// gameCounter++;
++gameCounter;
console.log(gameCounter);   // 101


let a = 5
const b = a++

console.log(`a:${a} , b:${b}`);

let x = 11;
const y = ++x

console.log(`x:${x} , y:${y}`);













